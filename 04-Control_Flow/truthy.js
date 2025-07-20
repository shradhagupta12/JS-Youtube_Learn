let userEmail = " ";

if(userEmail){
    // console.log("Email avalable");
}else{
    // console.log("Email not avalable");
}

// Falsly
// 0 , false , -0 , BigInt 0n , "" , null, undefined , NaN

// Truthy

// '0' , 'false' , " " , [] , {}, function(){}


// Nullish Coalescing Operator (??) : works for cases where it return value (null , undefined);

let val1;
// val1 = 12 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = 0 ?? 10;
// val1 = null ?? -0 ?? 20
// val1 = null ?? undefined ?? 20
val1 = null ?? 10 ?? 20

// console.log(val1);

/*
Nullish is used as a fallback when you want to handel the return value in more secured 
and systematic may.
*/

// Terninary Operator

// condition ? true : false

let iceCoffee = 120;

iceCoffee >=100 ? console.log("Coffee is greater than 100") : 
console.log("Coffee is less than 100");

