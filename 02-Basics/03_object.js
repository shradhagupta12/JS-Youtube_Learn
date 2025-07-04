// SingleTon : - And when ever a object is created using construter than its created in singleton
// Whenever it is declare in literals than singleton is not created 

const mySymbol = Symbol('key');

const JSUser = {
    name : "Raju",
    age : 32,
    email : "raju@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday" , "Tuesday" , "Wednesday"],
    "designation user" : "Programmer",
    [mySymbol]: "key2"
};

// How to access the the object from JSUser

console.log(JSUser.email);

console.log(JSUser["name"]);

// If we try to access the string key in the list we can't access it using dot method.As we have space in the name

console.log(JSUser["designation user"]);

// And even Symbol cannot be access using dot method.

console.log(JSUser[mySymbol]);

// Want to overwrite the value of the object

JSUser.email = "raju@microsoft.com";

// Want to freez the changes that no one change the value in object.

Object.freeze(JSUser);

JSUser.email = "raju@chatgpt.com";

console.log(JSUser);

// How to add function to the object

JSUser.greeting = function() {
    console.log("Hello JSUser, Welcome");
}


JSUser.greetingTwo = function() {
    console.log(`Hello JSUser, Welcome ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());

