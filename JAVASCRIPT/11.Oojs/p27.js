// encapsulation
// accessor property (get and set)

class User{
    constructor(){
        this._name = []
    }
    set name(val){
        this._name.push(val)
    }
    get name(){
        return this._name[this._name.length-1];
    }
}

let u1 = new User()

u1.name = "Harry"
console.log(`name =`,u1.name)

u1.name = "Sam"
console.log(`name =`,u1.name)

u1.name = "John"
console.log(`name =`,u1.name)