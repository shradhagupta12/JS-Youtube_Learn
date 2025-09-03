class User {
    constructor(username){
        this.username = username
    }

    printMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`Course was added by ${this.username} ${this.password}`);
    }
}

const chai = new Teacher('chai' , 'chai@example.com' , 1222);
chai.addCourse();

const tea = new User ('Masala Tea');
tea.printMe();
chai.printMe();

console.log(chai instanceof Teacher);
console.log(Teacher instanceof User);
console.log(chai instanceof User);

