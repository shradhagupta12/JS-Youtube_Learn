const myNums = [1 , 2 ,3];

const myTotal = myNums.reduce((acc , currval) => {
    console.log(`Accumlator: ${acc} and currentValue: ${currval}`);
    return acc + currval
} , 3)

console.log(myTotal);


// Example 

const myCart = [
    {
        itemName : "JS Course",
        itemPrice : 2000
    },
    {
        itemName : "Java Course",
        itemPrice : 1999
    },
    {
        itemName : "Python Course",
        itemPrice : 999
    },
    {
        itemName : "DSA Course",
        itemPrice : 12000
    }
]

const myCartTotal = myCart.reduce((acc , price) => {
    return acc + price.itemPrice
},0)

console.log(`The total value of your cart is ${myCartTotal}`);
