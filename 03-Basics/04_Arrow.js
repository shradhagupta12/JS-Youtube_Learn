const user = {
    userName : "Shraddha",
    fee : 999,

    greeting : function (){
        console.log(`${this.userName} welcome to website.`);
        
    }
}
// user.greeting();
// user.userName = "Om"
// user.greeting();

// console.log(this);


// function chai(){
//     let userName = "Shraddha"
//     console.log(this.userName);
// }


// const chai = function(){
//     let userName = "Shraddha"
//     console.log(this.userName);
// }


// const chai = () => {
//     let userName = "Shraddha"
//     console.log(this);
// }
// chai()



// Explict function
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2 , 4));


// Implict function
// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)



// Object return

const addTwo = (num1 , num2) => ({userName : "Shraddha"});


console.log(addTwo());




/* 
Whenever your are refering the current context of the object we use this keyword.
this keyword refer to current context of the object and only can be used in object 
and not in function.

this context in node enviroment and this context in window enviroment is completly different.

this will refer to global context . whereas in the window the global
context all the time is the window where all the DOM element are present 
so it will always refer to window context.

When I am trying to access the this keyword in function it is giving me undefine. 
As we can't access it in the function
*/

