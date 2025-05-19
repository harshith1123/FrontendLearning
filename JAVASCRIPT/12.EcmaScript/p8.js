// class constructor

let User = class{
    constructor(na,em){
        this.name = na;
        this.email = em;
    }
    print(){
        console.log(`name is ${this.name} and email is ${this.email}`)
    }
}

let x = new User("John","john@gmail.com")
console.log('instance=',x)
console.log('name =',x.name)
console.log('email =',x.email)
x.print()