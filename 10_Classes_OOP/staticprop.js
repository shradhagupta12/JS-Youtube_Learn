class User{
    constructor(username , email){
        this.username = username
        this.email = email
    }

    // Method
    printMe(){
        console.log(`UserName: ${this.username}`);
    }

    // As a new user creates it should create new ID
    static createId(){
        return `123`
    }


}

const shraddha = new User('Shraddha' , 'shraddha@example.com');
// console.log(shraddha.createId());

// If i dont want not all of the method instanted from teh class should be able to access 
// my method can use word 'static'


class Teacher extends User{
    constructor(username , email){
        super(username , email);
    }
}

const iPhone = new Teacher('iPhone' , 'i@phone');
iPhone.printMe();
console.log(iPhone.createId());
