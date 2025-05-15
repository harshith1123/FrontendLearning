// class inheritance

class SuperClass{
    constructor(){
        this.name = "Harry"
    }
}

class BaseClass extends SuperClass{
    constructor() {
        super() // represents super class constructor
    }
}

let x = new BaseClass();
console.log("name =",x.name)