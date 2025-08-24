// The Promise object represent the eventual completion of an 
// asyncronous operation and it resulting value.

// Promise has 3 stages
// Pending
// Fullfiled 
// Rejected

// Promises takes the callback in it.

// How to make Promises
// Creating new Promises 1
const promiseOne = new Promise(
    function(resolve , reject){
    
    //Do an async task
    // DB calls , cryptography , network

    setTimeout(function(){
        console.log("Async task is completeted");
        resolve();
    }, 2000);
});

// Comsumption of the Promises it also take a callback function
// .then is has a connection with resolve and to connect 
// resolve and .then 

// Creating new Promises 2

promiseOne.then(function(){
    console.log("Promise is consumed");
});

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log('Asyn task 2 completed');
    
})

// Creating new Promises 3
// How to pass data to .then using resolve
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({userName : "Chai" , email:"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(userDetails){
    console.log(userDetails);    
})

// Creating promise 4

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        const error = true;

        if(!error){
            resolve({userName: 'Shraddha' , password: '12345'});
        }else{
            reject("Some error occur");
        }
    }, 1000)
})

promiseFour
.then((userDetail)=>{
    console.log(userDetail);
    return userDetail.userName;
})
.then(function(userDetail){
    console.log(userDetail);
})
.catch((error)=>{
    console.log(error);
})
.finally(() => console.log("Promises got reject or resolve"))