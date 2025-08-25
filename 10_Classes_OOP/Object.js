function multiplyOf5(num){
    return num * 5;
}

let power = multiplyOf5.power = 2;

console.log(multiplyOf5(5));
console.log(multiplyOf5.power);
console.log(multiplyOf5.prototype);
console.log(power);


function createUser(userName , score){
    
}