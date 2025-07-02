// +++++++++++++++ Numbers ++++++++++++++++++++++++++++++

//Common way of declaring number
const score = 100;

// Another way of declaring number
const balance = new Number(99);

console.log(balance);
console.log(score);

// Various Function avalable in Number

console.log(balance.toString()); // It will convert the number in String
console.log(balance.toFixed(2)); // It will fixed value after decimal

const money = 100000
console.log(money.toLocaleString('en-IN')); // Some time reading the amount become diffcult so we can use LocalSting which adds comma
// But by  default the comma is given in American Format. We can change it to Indian format too.

const anotherNumber = 20.6786;
console.log(anotherNumber.toPrecision(2));
console.log(anotherNumber.toPrecision(4));
// It will give us the Precise value for the given number.