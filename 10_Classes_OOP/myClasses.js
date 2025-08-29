// // ES6
// class User {
//     // Whenever a 
//     // object is initalized a contructor 
//     // is called.
//     constructor(userName , email , password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

// // will create method
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new User('chai' , 'chai@example.com' , '123');
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


// Behind the seen

function User(userName , email , password){
    this.userName = userName
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new User('tea' , 'tea@example.com' , '123');
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
