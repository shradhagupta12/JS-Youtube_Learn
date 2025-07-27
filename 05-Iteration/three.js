// For of Loop

// It can be use to iterator array , for of cannot be used to iterator Object. 
// there are other different ways to do the same 

const myStates = ['Mumbai' , 'Goa' , 'Nagpur' , 'Nashik'];

for (const states of myStates){
    // console.log(states);
}

const greeting = "Hello Worlds";

for (const greet of greeting){
    // console.log(greet);
    
}

// Maps 

const map = new Map();

map.set('IN' , 'India');
map.set('GE' ,'Germany' );
map.set('UK' ,'United Kindom');

for (const [code , country] of map) {
    console.log(code, ':-' , country)
}