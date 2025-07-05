// Functions are like a package which can be called anytime.

function callMyName(){
    console.log('O')
    console.log('M')
}

callMyName();

// This was very basic now let say we want some task to be done.

function addTwoNumber(numberOne , numberTwo){
    console.log(numberOne + numberTwo);
}

addTwoNumber(); // If we don't send any argument to the function it will give output as NaN.

addTwoNumber(3 , 4); // As expected it will give the addtion of two number

addTwoNumber(3 , "4"); //It will take the value as String

// We can also store the the output in a variable.

const result = addTwoNumber("Result: " + 2 , 3);

console.log(result) 
// But the result variable will not be store the result in it. It will give undefined.
// Because the function is not returning any value.


function addTwoNumber(numberOne , numberTwo){
    // There are three ways to return a result 

   1. // return numberOne + numberTwo;

  2.  // const output = numberOne + numberTwo
    return output;

}

// Now result holds some value which can use further.
const results = addTwoNumber(2 , 4)

console.log("Result: " + results);


function  loginUserMessage(name = "Shraddha"){
    return `${name} your logged in`
}

// If we don't pass any value to it take undefined so to avoid this we can pass a default value 
console.log(loginUserMessage("Sam"));

// The new value will overwrite the default value