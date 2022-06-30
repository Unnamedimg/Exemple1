import * as data from "/data.js";
let authorisated = false;
let authorisatedUser = new Object();
const contentBlock = document.getElementById("contentBlock");
const buttons = document.getElementsByClassName("button");
const users = [];
let shopCart =[];
let currentUser ;
authorisatedUser.shopCart = shopCart;
class User{
    constructor(name,password){
        this.name=name;
        this.password=password;
        this.id=users.length;
        this.shopCart=authorisatedUser.shopCart
}}

//signIn && signUp && signOut;
function initButtons(arr,name,n){
    n===undefined?n=0:n;
   
    if(name=="buttons"){
        if(n<arr.length){
            let item = arr[n];
            if(item.id =="signOut"){
                return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).onclick = signOut;
            }
            if(item.id =="shopCart"){
                return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).onclick = showShopCart;
            }
            if(item.id =="shop"){
                return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).onclick = showShop;
            }
            console.log(String(item.id));
            return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).onclick = ButtononClick; 
        }
        
    }else if(name=="signUp"){
//        console.log("initButtons")
//        console.log(arr);
        if(n<arr.length){
            let item = arr[n];
            //console.log(item)
            console.log(String(item.id));
            if(item.id=="register"){
            return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).onclick = register; 
            }else{return initButtons(arr,name, n=n+1)}
        }}else if(name=="signIn"){
            //        console.log("initButtons")
            //        console.log(arr);
                    if(n<arr.length){
                        let item = arr[n];
                        //console.log(item)
                        console.log(String(item.id));
                        if(item.id=="authorisation"){
                        return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).onclick = authorisation; 
                        }else{return initButtons(arr,name, n=n+1)}
                }}else if(name=="itemButton"){
                            console.log("initButtons")
                            console.log(arr);
                            if(n<arr.length){
                                let item = arr[n];
                                console.log(item)
                                console.log(String(item.id));
                                return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).addEventListener('click', () => buttonsOnClick(item.id))
                            }}else if(name=="deleteButton"){
                                console.log("initButtons")
                                console.log(arr);
                                if(n<arr.length){
                                    let item = arr[n];
                                    console.log(item)
                                    console.log(String(item.id));
                                    return initButtons(arr,name, n=n+1), document.getElementById(String(item.id)).addEventListener('click', () => deleteButton(item.id))
                                }}
        
    
}
//start
initButtons(buttons,"buttons");

function ButtononClick(id){
    let Id= this.id;
    //console.log(String(Id));
    //console.log(data.pages.get(Id));
    //console.log(Id);
addtoCB(data.pages.get(Id),Id);
}
function getClassName(Id){
    let buttonClass;
    switch(Id){
    case"signUp":
        buttonClass ="signUp";
        return buttonClass;
    case"signIn":
        buttonClass ="signIn";
        return buttonClass;
    case"itemButton":
        buttonClass="itemButton"
        return buttonClass;
    case"deleteButton":
        buttonClass="deleteButton"
        return buttonClass;
    default:
        buttonClass ="buttons";
        return buttonClass;

    }
}
function addtoCB(data, Id){
    new Promise(function(resolve, reject) {
    console.log(data);
    contentBlock.innerHTML = data;
resolve();
    }).then(getCB(Id));
    
    }
function getCB(Id){
    let a =getClassName(Id);
    console.log(a);
    let b =document.getElementsByClassName(String(a));
    console.log(b);
    initButtons(b,a);
}
function register(){
    const username =document.getElementById("inputLogin").value;
    const password =document.getElementById("inputPassword").value;

    if(loginCheck(username,users)){if(passwordCheck(password)){
        users.push(new User(username,password));
        alert('Successfully registered!');
        console.log(users);
    }};
}
//login check
function loginCheck(username,arr){
    let symbols =Array.from(username);
    let d= 0;
    let d2= 0;
    for (let a of symbols){
        console.log(d);
        if(a!== "."||a!== "!"|| a!== "/"|| a!=="@"|| a!=='#'|| a!==null){
            d++;
        }else{return alert(new Error("username is invalid")) }}

    if(d=symbols.length){
        console.log('true 1');
        if(username.length>=4 ){
                console.log("true2")
        }else{
            return alert(new Error("username is invalid"));
            }
        for(let user of arr){
            console.log(user.name);
            if(user.name == username){
                return alert(new Error("a user with the same name already exists"));
            }else{console.log('true3')}
        }
        console.log('true 4');
        return true;
    }
}
//password check
function passwordCheck(password){
    if(password.length<4){
        return alert(new Error("password is too short"));
    }else{
        console.log('true');
        return true;
    }
}
//authorisation
function authorisation(){
    const username =document.getElementById("inputLogin").value;
    const password =document.getElementById("inputPassword").value;
    for(let user of users){
        if(username == user.name){
            if(password==user.password){
                alert('Wellcome'+ username+"!");
                currentUser = user;
                authorisatedUser.shopCart=currentUser.shopCart;
                authorisated = true;
                authorisatedUser.name= currentUser.name;
                 authorisatedPage(authorisated,authorisatedUser.name);
                addtoCB(data.pages.get("siteName"),"siteName");
                return;
            }
        }
    }
    alert(new Error("Not found"));
}
function authorisatedPage(authorisated,authorisatedName){
    let signIn = document.getElementById('signIn');
    let signUp = document.getElementById('signUp');
    let signOut = document.getElementById('signOut');
    let currentUserName = document.getElementById('currentUserName');
    let authorisatedUserName =document.getElementById('authorisatedName');
    if (authorisated == true){
        signIn.style.display ="none";
        signUp.style.display ="none";
        signOut.style.display ="inline-block";
        currentUserName.style.display = "inline-block";
        authorisatedUserName.innerHTML =authorisatedName;
    }
}
function signOut(){
    authorisated = false;
    //save User Data;
    for(let i=0;i<users.length;i++){
        if(users[i].id== currentUser.id){
            console.log("save " + users[i].name+" as "+currentUser.name)
            users[i]=currentUser;
        }
    }
    authorisatedUser.shopCart =[];
    addtoCB(data.pages.get("siteName"),"siteName");
    let signIn = document.getElementById('signIn');
    let signUp = document.getElementById('signUp');
    let signOut = document.getElementById('signOut');
    let currentUserName = document.getElementById('currentUserName');
    if (authorisated == false){
        signIn.style.display ="inline-block";
        signUp.style.display ="inline-block";
        signOut.style.display ="none";
        currentUserName.style.display ="none";
    }
}
//shop
function showShop(){
    contentBlock.innerHTML ="";
    let products= data.arr;
    console.log(products);
    showProduct(products);
}
function showProduct(products){
    let data =products;
    console.log(data);
    //contentBlock.insertAdjacentHTML("afterbegin",String(data));
    productCreator(data);
    
}//here
function productCreator(data){
    console.log(data);
    new Promise(function(resolve, reject) {
        for(let j=0; j<data.length;j++){   
            contentBlock.insertAdjacentHTML('beforeend',' <div class ="itemBlock">'+
            '<div class="itemName">'+ data[j][0] +'</div>'+
            '<img src="'+ data[j][2] +'",width="100" height="70" class= "itemImg" >'+
            '<div class="itemPrice">'+ data[j][1]+ " UAH" +'</div>'+
            '<div class="itemButton" id ="itemButton' + j +'"" dataId="'+ j +'">BUY</div>'+
            '</div>');
        }
        resolve();
    }).then(getCB('itemButton'));
}
function buttonsOnClick(Id){
    console.log(Id);
    if(authorisated==true){
    let num = parseInt(Id.replace(/\D+/g,""));
    authorisatedUser.shopCart.push(num);
        console.log('push to shopcart');
        console.log(authorisatedUser.shopCart);
    }else{
        alert('Please Sign In');
        console.log('Please Sign In');
    }
}
//here

function showShopCart(){
    contentBlock.innerHTML ="";
    let result = {};
    let arr =authorisatedUser.shopCart;
    let totalPrice =0;
    for (let i = 0; i < arr.length; ++i){
    let a = arr[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
    }
    let size = Object.keys(result).length;
    console.log(size);
            for(let j=0; j<data.arr.length;j++){
                if(result[j]!= undefined){
                contentBlock.insertAdjacentHTML('beforeend',' <div class ="itemBlock">'+
                '<div class="itemName">'+ data.arr[j][0] +'</div>'+
                '<img src="'+ data.arr[j][2] +'",width="100" height="70" class= "itemImg" >'+
                '<div class="itemPrice">'+ data.arr[j][1]+ " UAH" +'</div>'+
                '<div class="itemCount">'+" Count: " + result[j]+ '</div>'+
                '<div class="deleteButton" id="'+j+'">Delete</div>')
                totalPrice +=Number(data.arr[j][1]);
            };
        }
    contentBlock.insertAdjacentHTML('beforeend','<div id="totalPrice">'+totalPrice+" UAH"+'</div>' +'<div id="buyButton">Buy</div>');
    getCB('deleteButton')
}
function deleteButton(dataId){
    console.log("delete "+dataId);
    for (let j =0; j<authorisatedUser.shopCart.length;j++){
        if(authorisatedUser.shopCart[j]== dataId){
            console.log("delete "+authorisatedUser.shopCart[j]);
            authorisatedUser.shopCart.splice(j,1);

        }
    }
    showShopCart();
}
