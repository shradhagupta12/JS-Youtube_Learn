const myNumber = [1 , 2 , 3 ,4 , 5 , 6 , 7 , 8 , 9]

// let myNums = myNumber.map((num) => num + 1)
// console.log(myNums);

// Channing of methods

let myNums = myNumber
                .map((num) => num * 10)
                .map((num) => num - 5 )
                .filter((num) => num > 2)

console.log(myNums);
