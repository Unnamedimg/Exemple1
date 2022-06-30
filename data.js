export let pages = new Map();
pages.set("shop","<h1>Shop</h1>");
pages.set("siteName","<h1>General Page</h1><h2>Registration, authorisation, shop, shopcart on js</h2>");
pages.set("authors","<h1>Author</h1><h2>Puchka Danyil</h2><h2>37600daniil@gmail.com</h2><h2>+38 (093)526-64-28</h2>");
pages.set("signUp",'<div id="inputBox"> <div class="subtext, formItem">Login</div> <input id="inputLogin" class="signUp , authorisationInput, formItem"> <div id="infoLogin" class="signUp , subtext, red, formItem"></div> <div class="subtext, formItem">Password</div> <input id="inputPassword" class="signUp , authorisationInput, formItem"> <div id="infoPassword" class="signUp , subtext, red, formItem"></div> <button id = "register"  class="signUp , formItem"> Sign up </button> </div>');
pages.set("signIn",'<div id="inputBox"> <div class="subtext, formItem">Login</div> <input id="inputLogin" class="signIn , authorisationInput, formItem"> <div id="infoLogin" class="signIn , subtext, red, formItem"></div> <div class="subtext, formItem">Password</div> <input id="inputPassword" class="signIn , authorisationInput, formItem"> <div id="infoPassword" class="signIn , subtext, red, formItem"></div> <button id = "authorisation"  class="signIn , formItem"> Sign in </button> </div>');
pages.set("shopCart","<h1>ShopCart</h1>")
export let arr = new Array();
arr =[["Product0","100","./diamond.png"],
    ["Product1", "200","./diamond.png"],
    ["Product2","300","./diamond.png"],
    ["Product3","500","./diamond.png"],
    ["Product4","1000","./diamond.png"],
    ["Product5","1500","./diamond.png"],]
