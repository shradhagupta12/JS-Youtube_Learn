// Singleton/constructure object
const myObj = new Object;

myObj.name = 'Summit';
myObj.rollno = 21;
myObj.class = '07th';
myObj.division = 'B';

// console.log(myObj);

// How to merge two object

const objOne = {1: 'A' , 2: 'B'};
const objTwo = {3: 'A' , 4: 'B'};
const objThree = {5: 'A' , 6: 'B'};

// There are 2 ways to merge the object but the most used is the 2rd one

const objFour = Object.assign({} , objOne , objTwo , objThree);
// console.log(objFour);

// Ok so the empty braces is given so that the all the merge value is stored in 
// that it is not compulsary to give empty braces but its always recommeded to give empty braces


// OK so the second method to do the same is using the spread opertor as we used in Array

const objFive = {...objOne , ...objTwo , ...objThree};
// console.log(objFive);


//  Now we will see if the object comes from the databases. 
// Always from the database the data comes in Array format.

const user = [
    {
        id : 1,
        email: 'h@gmail.com'
    },
    {
        id : 2,
        email: 'h@gmail.com'
    },
    {
        id : 3,
        email: 'h@gmail.com'
    },
]


// Another way to access this object values from the array 
// console.log(user[1].email);

// Now if want only the keys of the object or value from the object.

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));


// Sometime there are cases where maybe there some values are not present we can check that.

// console.log(myObj.hasOwnProperty("roll"));

// Destruction

// Basically destruction is used in object and array . Mostly used in object.

// So lets say we have a object course. And we want to access the object element. 
// We mostly use dot notation for accessing the object element.
// But we can also use destruction for the same. Let see below example


const course = {
    courseName : "Javascript In Hindi",
    coursePrice : 999,
    courseFormat : "Online"
}

// Common access format

// console.log(course.coursePrice);

// Destruction method

const {courseName} = course

// console.log(courseName);

// We can give a easy name to key in destuction to access the element

const {courseFormat : format} = course;

// console.log (format);


