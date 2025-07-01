console.log(2 == 1)
console.log(2 < 1)
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 <= 1)


// Comparing to differenet datatype

console.log("2" == 2); 

//In this case the JS smartly converted the string 
// value to number and compared due to which we got a true output

console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// Comparision operators and equal to works diffrenetly in JS 
// thats why the output is slightly differ form the expection and its is always a suggestion 
// to keep the code simple and try to compare the same datatype and avoid this type of conversion.


// Strick comparsion (===)

console.log("2" === 2);

// As this check both the datatype and the value






