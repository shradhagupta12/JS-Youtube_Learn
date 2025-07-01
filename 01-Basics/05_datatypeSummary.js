// Primitive Type (call by value)

// 7 types : String , Number , Boolean , null , undefined , BigInt , Symbol

// String : charaters and alphabet use in JS is called String.
// Number : Number are the digit 
// Boolean : True or False
// null : Empty space 
// undefined : variable is defined but value is not be assigned
// BigInt : Number which are too big size some of the scientific numbers.
// Symbol : To make any of the variable or function unique


let studentId = 122389;
let sscMarks = 23.05;

let userName = "Shraddha";

let isLoggedIn = false;

let outsideTemp = null;

let studentEmail;

let bigNumber = 12943249328482374n

let id = Symbol('1234');
let anotherId = Symbol('1234');



// Non-Primitive (call by refernce)

// Array , Object , Functions

const myArray = ["SpiderMan" , "IronMan" , "Hulk" , "BatMan"];

let myObj = {
    name : "Shraddha",
    age : 12
}

let myFunction = function(){
    console.log("My Function");
}



/*******************************************************************************/
// Is Javascript a static type or dynamic type language ?
/*******************************************************************************/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "shraddhagupta";

let anotherYoutubeName = myYoutubeName;

anotherYoutubeName = "imShraddha";

console.table([myYoutubeName , anotherYoutubeName]);

/* 
    So above example is of Stack memory as in stack memory the when we assign the one value to another 
    Javascript gives the copy of the value instead of actual value.

    So if the value of the another variable is updated in future it will not be changing the value of 
    the actual variable.
*/

let userOne = {
    email : "userone@google.com",
    isLoggedIn : true
}

console.log(userOne);

let userTwo = userOne

userTwo.email = "shraddha@gmail.com"

console.table([userOne , userTwo]);

/*
    So in the Heap memory case both the variable is pointing to the same memory location and in 
    one variable value change will lead to actual value change in the memory.
    
    Which can lead to data inconsistent.
*/