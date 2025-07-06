/*So Scope means how far the variable is accessable lets take a below example.

As we can see that the var variable is changing the value of the variable in global scope.
and let and const variable is not accessable outside that's at global scope. which make the 
code base more effence and can be worked collabratively.
*/

// var numberThree = 100;

let numberTwo = 200;

{
let numberOne = 34;
const numberTwo = 39;
// var numberThree = 40;

// console.log("INNER: " , numberTwo);

}

// console.log(numberOne);
// console.log("OUTER: ",numberTwo);
// console.log(numberThree);

/* 
    Note: The scope in window console and the scope in code enviroment is different.
*/

// Scope in more details

function one(){
    const userName = "Shraddha";

    function two(){
        const channel = "Youtube";
        console.log(userName + channel)
    }
    console.log(userName + channel);

    two();
}
one();