function setUserName(userName){
    // complex DB calls
    this.userName = userName;
    console.log('calles');
}

function createUser(userName , email , password){
    setUserName.call(this , userName)
    

    this.email = email
    this.password = password
}

const chai = new createUser("chai" , 'chai@example.com' , '123');
console.log(chai);
