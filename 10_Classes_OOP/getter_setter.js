class User{
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}usgd1234dsfjhjf`
    }

    set password(value){
        this._password = value;
    }
}

// Perspective of getter and setter in js
// Trying to access a value outside the class is called getter if we use get we must also use set 

const shraddha = new User("s@gmail.com" , "123")
console.log(shraddha.email);
console.log(shraddha.password);
