const User = {
    _email: 'h@hc.com',
    _password: "1234dsds",
    
    get email(){
       return this._email.toUpperCase();
    },
    
    set email(value){
        this._email = value
    }
}

