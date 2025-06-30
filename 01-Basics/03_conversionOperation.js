let score = "33 abs";

console.log(typeof score);
let conversionScore = Number(score);

console.log(typeof conversionScore)
console.log(conversionScore);

// When we try to change the value of string to number is get change in JS but the value of the number will be NaN

/*
"33" => 33
"33 abc" => NaN
true => 1 ; false => 0
*/

let isLoggedIn = 'abc'

let boolenisLoggedIn = Boolean(isLoggedIn);

console.log(boolenisLoggedIn)
console.log(typeof boolenisLoggedIn)

/*
If the value of the number is 0 or -0 it will update it false in conversion else in other cases it is converting it to true

*/