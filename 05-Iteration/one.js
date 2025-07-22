// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <=10; i++) {    
  for (let j = 2; j <=2; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
    
  }  
}

let myArray = ['Batman' , 'SuperMan' , 'SiperMan'];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break & Continue
for (let index = 0; index <= 10; index++) {
    if(index == 5){
        // console.log('Dedectated 5');
        break;
    }
    // console.log(`Value of i is ${index}`);
       
}

for (let index = 0; index <=10; index++) {
    if(index == 5){
        console.log(`Dedected 5`);
        continue;
    }
    console.log('Value of i is ' + index);
    
}
