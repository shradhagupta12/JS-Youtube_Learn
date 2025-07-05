// Rest Operator in Function

// So the rest operator will return the multiple argument value in a array format 
// Now we can pass 1000s of value to the function without worring about the argument value.

function addItemsValue (...num) {
    return num
}

console.log(addItemsValue(100 , 200 , 300 , 400))

// We will we see many of the  below example in  future

// As we can we see the 
// 100 = val1
// 200 = val2
// and rest of the values in rest operator


function calculateCartValue(val1 , val2 , ...num) {
    return num;
}

console.log(calculateCartValue(100 , 200 , 300 , 400))


// There will be situation where we have to process the object using function 

const empDetails = {
    userName: "Shraddha",
    salary: 199
}

function handleObject (anyObject){
    console.log( `Username is ${anyObject.userName} and salary is ${anyObject.salary}`);
}

handleObject(empDetails);

// We don't need to pass the object like this all the time. We can also do the same like below

handleObject({
    userName : "Sam",
    salary : 200
})

// Similary manner we can send array to the function

const newArray = [100 , 200 , 400 , 500];

function handleArray(getArray){
    return getArray[3];
}

console.log(handleArray(newArray));

console.log(handleArray([100 , 400 , 300 , 200]));
