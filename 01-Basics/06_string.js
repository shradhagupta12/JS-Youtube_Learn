const name = "Manoj";
const repoCount = 50;

console.log(`Hi , My name is ${name} and my Repositry count is ${repoCount}`);


// Another way to write string
const userOne = new String ("Shraddha-SG-com");
console.log(userOne);

// Want to conver the String to Array
console.log(userOne.split('-'))

// Want to check the value at certain index
console.log(userOne.indexOf('d'));
console.log(userOne.charAt(3));

// Want to replace some value in the variable
let url = 'https://www.manoj%20gupta.com';

console.log(url.replace('%20' , '-'));

// Want to convert the text to lowercase or uppercase

console.log(name.toLowerCase());
console.log(name.toUpperCase());

// Want to remove the white spaces from the varaiable 

let newString = "    shraddha    ";

console.log(newString);
console.log(newString.trim());
console.log(newString.trimStart());
console.log(newString.trimEnd());


// Want to find the sub string of the variable 

console.log(name.substring(0,2));
console.log(name.substring(3,5));

// Length of the value
console.log(name.length);

// The lastIndexOf() method of String values searches this string and 
// returns the index of the last occurrence of the specified substring.

console.log(userOne.lastIndexOf('S'));
