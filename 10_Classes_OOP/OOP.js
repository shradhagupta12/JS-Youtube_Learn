// Object Literals (object literals means literally)
const user = {
    userName : "Shraddha",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from DB");
        
    }
}
// "this" is the current context. We are pointing the current context of the function/class

// console.log(user.userName);
// console.log(user.getUserDetails());


// Constructor function

// const PromiseOne = new Promise();
// const date = new Date();

// "new" keyword is used to help to create new context 

function User(userName , loginCount , isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // We still can add a new method in it

    this.greeting = function (){
        console.log(`Welcome ${this.userName}`);
    }

    // When we return "this" we pass on the details forward
    // return this
}

// This will override the values 
// const userOne = User('Shraddha' , 12 , true);
// const userTwo = User('ChaiOrCode' , 11 , false);


// Using "new" as this will have new instance to play with
const userOne = new User('Shraddha' , 12 , true);
const userTwo = new User('ChaiOrCode' , 11 , false);

// When ever we write "new" keyword it creates a 
// empty object which is called new instance

// step one: New Object creates
// step two Constructure is called due to your new keyword
// step three: this keywords get injected
// step four: get it in your function

console.log(userOne.constructor);

// InstanceOf

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
