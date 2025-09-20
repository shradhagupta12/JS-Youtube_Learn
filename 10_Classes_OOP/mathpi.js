// Show hidden feature
const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI');

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const myNewObj = {
    name: 'ginger chai',
    price: 250,
    isAvaliable: true,

    orderChai: function(){
        console.log("Chai order");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(myNewObj , "name"));

Object.defineProperty(myNewObj , 'name' , {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myNewObj , "name"));

for(let[key , value] of Object.entries(myNewObj)){
    if(typeof value !== 'function'){
        console.log(`${key} , ${value}`);  
    }
} 
 
// After we declare enumerable as false the name will not be accessable