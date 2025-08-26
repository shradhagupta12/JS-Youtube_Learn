// let myName = 'shraddha';
// console.log(myName.length); //this will give the actual length of the variable.

// let myClass = 'Mscit  ';
// console.log(myClass.trueLength);


 const myHero = ['thor' , 'spiderman'];

 let heroPower = {
    thor: 'hammer',
    spiderman: 'sling'
 }

/*
As in last example we tried to inject the prototype
spreatly for each an ever object or array but we can also it using
direct applying it to object.
*/

Object.prototype.shraddha = function(){
    console.log("Shraddha is avaliable for all")
}

// heroPower.shraddha();
myHero.shraddha();


// inhertance

const User = {
    name : 'chai',
    email : 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvalable: false
}

const TASupport = {
    makeAssignmentL: 'JS Assignment',
    __proto__: TeacherSupport,
    fullTime: true
}

Teacher.__proto__ = User;


// Modern Approch

Object.setPrototypeOf(TeacherSupport , Teacher);

// Lets create the trueLenght method 
Object.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.myName}`);
    console.log(`True length is: ${this.trim().length}`);
}

let anotherName = 'Shraddha     '

anotherName.trueLength();