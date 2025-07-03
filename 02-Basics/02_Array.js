const marvelHeros = ['SpiderMan' , 'IronMan' , 'Hulk'];
const dcHeros = ['Flash' , 'BatMan' , 'SuperMan'];

// Want to merge two arrays.

// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // This take dcHeros as one complete element and not merge both the array in one

// Option One : using concat give us a new array by mergeing 2 array
// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros)

// Option Two : using spread operator give a new array by mergeing more than one array.

const allHeros_new = [...dcHeros , ...marvelHeros];
console.log(allHeros_new);

// Suppose we have a nested array and want to make them in one whole array

const nestedNumbers = [1 , 2 , 4 , 5, [6 , 7 , 8] , 9 ,[10 , 11] , 12];

const nestedNumbers_new = nestedNumbers.flat(Infinity);

console.log(nestedNumbers_new);

// we ask question to array

console.log(Array.isArray('Shraddha'));

// want to convert this to array

console.log(Array.from("Shraddha"));

// want to make array from multiple values.

const num1 = 100;
const num2 = 200;
const num3 = 300;

console.log(Array.of(num1, num2 , num3));



