function multiplyOf5(num) {
    return num * 5;
}

let power = multiplyOf5.power = 2;

console.log(multiplyOf5(5));
console.log(multiplyOf5.power);
console.log(multiplyOf5.prototype);
console.log(power);


function createUser(userName, score) {
    this.userName = userName
    this.score = score
}

// Can we use the object prototype in the function, Yes we can check the below example.

// But why did we use this in the below function. as how will i known who called and to whom i have the apply the function.
//So in this case we use this as every components get its own copy of the function.

//below have injected function in the prototype
createUser.prototype.increment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`My score is ${this.score}`);

}


// Lets use the new created prototype function
// But without the 'new' keyword make the variable known the injected function.
const chai = new createUser('chai', 25);
const tea = createUser('tea', 250);

// new object is created.
chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function.This means that it has access to properties and methods defined 
on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return value is specified 
from the constructor, JavaScript assumes this, the newly created object, to be the 
intended return value.

The new object is returned: After the constructor function has been called, if it doesn't 
return a non-primitive value (object, array, function, etc.), the newly created object is 
returned.

*/