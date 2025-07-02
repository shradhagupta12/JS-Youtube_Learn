// +++++++++++++++ Numbers ++++++++++++++++++++++++++++++

//Common way of declaring number
const score = 100;

// Another way of declaring number
const balance = new Number(99);

// console.log(balance);
// console.log(score);

// Various Function avalable in Number

// console.log(balance.toString()); // It will convert the number in String
// console.log(balance.toFixed(2)); // It will fixed value after decimal

const money = 100000
// console.log(money.toLocaleString('en-IN')); // Some time reading the amount become diffcult so we can use LocalSting which adds comma
// But by  default the comma is given in American Format. We can change it to Indian format too.

const anotherNumber = 20.6786;
// console.log(anotherNumber.toPrecision(2));
// console.log(anotherNumber.toPrecision(4));
// It will give us the Precise value for the given number.


/*+++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++*/

// console.log(Math);

// console.log(Math.abs(-12.344)); // It will help to change the negative number to positive
// console.log(Math.ceil(10.23783)); // It will give ceiling whole number(greater side) of the given number.
// console.log(Math.floor(10.23783)); // It will give floor whole number(smaller side) of the given number.
// console.log(Math.hypot(3 , 5));// The Math.hypot() method returns the square root of the sum of squares of the passed arguments. 
// // It returns NaN if at least one of the arguments cannot be converted to a number. 

// Random
const dice = Math.random();
console.log(dice)

let min = 1;
let max = 6;

let diceRoll = Math.floor(Math.random() * (max - min + 1) + min);

console.log(diceRoll);


/* 
Math.random() will always give us the number between 0 and 1 . 

Now if want the get the number from a particular range we can give MIN and MAX value to get number between the given number.
In the above example i have the example of diceRoll that when the diceRolls it give the random whole number between 1 and 6

The formula explain us that 
Step 1 : Get the random number using Math.random();
Step 2 : Now will minus the max value to min value and in this case we may get 0 so to avoid the same will add  plus 1
Step 3 : Will multiply the Step 1 and Step 2 to get the random number.
Step 4 : Now we have to add plus again to the generated value to get the value between 1 and 6.
Step 5 : Will apply the Math.floor to the generated value to get the whole number between 1 and 6.
*/



