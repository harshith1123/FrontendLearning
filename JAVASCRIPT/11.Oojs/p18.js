// class:- group/collection of objects (state & behaviour)

// state = properties, & behaviours = methods

class User{
    constructor(){
        // properties
        this.name = "john",
        this.age = 22;
        this.city = "bengaluru";
        this.isAdmin = false;
    }

    // method
    getUserName(){
        document.writeln(`<h3> username is ${this.name}</h3>`)
    }
}

let x = new User()
x.getUserName()

document.writeln(`<h3> age is ${x.age} years</h3>`)
