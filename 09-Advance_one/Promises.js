// // The Promise object represent the eventual completion of an 
// // asyncronous operation and it resulting value.

// // Promise has 3 stages
// // Pending
// // Fullfiled 
// // Rejected

// // Promises takes the callback in it.

// // How to make Promises
// // Creating new Promises 1
// const promiseOne = new Promise(
//     function(resolve , reject){

//     //Do an async task
//     // DB calls , cryptography , network

//     setTimeout(function(){
//         console.log("Async task is completeted");
//         resolve();
//     }, 2000);
// });

// // Comsumption of the Promises it also take a callback function
// // .then is has a connection with resolve and to connect 
// // resolve and .then 

// // Creating new Promises 2

// promiseOne.then(function(){
//     console.log("Promise is consumed");
// });

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Asyn task 2");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log('Asyn task 2 completed');

// })

// // Creating new Promises 3
// // How to pass data to .then using resolve
// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({userName : "Chai" , email:"chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(userDetails){
//     console.log(userDetails);    
// })

// // Creating promise 4

// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         const error = true;

//         if(!error){
//             resolve({userName: 'Shraddha' , password: '12345'});
//         }else{
//             reject("Some error occur");
//         }
//     }, 1000)
// })

// promiseFour
// .then((userDetail)=>{
//     console.log(userDetail);
//     return userDetail.userName;
// })
// .then(function(userDetail){
//     console.log(userDetail);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(() => console.log("Promises got reject or resolve"));


// Creating promise 5
// lets approch the promise using the async and await
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ userName: 'Shraddha', password: '12345' });
//         } else {
//             reject("Some error occur");
//         }
//     }, 1000)
// });


// async function consumedPromisesFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// }

// consumedPromisesFive();


// We will use the API "https://jsonplaceholder.typicode.com/users"


// async function getAllUser(){
//     try{
//        const response = await fetch('https://jsonplaceholder.typicode.com/users');
//        const data = await response.json();
//        console.log(data);
//     }catch(error){
//         console.log("E : " , error);
//     }
// }

// getAllUser();


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})