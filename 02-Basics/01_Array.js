// Array

const myArray = [0 , 1 , 2 , 3 , 4 , 5];

console.log(myArray);

// If I want to access any of the value of a particular index 
console.log(myArray[3]);


// Array Methods

// Length
console.log(myArray.length);

// Push : To add a new value to the array at the end of the array list
myArray.push(6)
console.log(myArray);

// Pop : To remove a number from the end of the array list
myArray.pop()
console.log(myArray);

// unShift : It adds the new value at the start of the array list
myArray.unshift(9);
console.log(myArray);

// Shift : It removes the number from the start of the array list
myArray.shift();
console.log(myArray);

/* 
Slice : Basically the slice method will not manupulate the array and 
only give the value present at that particular position. And will not invole the end range 
*/
console.log("A " , myArray);
const mySlice = myArray.slice(1 , 3);

console.log("mySlice :" ,mySlice);


/*
Splice : A Splice method will manupulate the array and will cut down the value present at given position.
*/
console.log("B " , myArray);
const mySplice = myArray.splice(1 , 3)
console.log("mySplice : " , mySplice);

console.log("C " , myArray);
