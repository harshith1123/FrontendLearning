let user = {}

Object.defineProperties(user,{
    name:{
        value:"Mike",
        writable:true
    },
    email:{
        value:"mike@gmail.com",
        writable:true
    },
    city:{
        value:"Mangalore",
        writable:false
    },
    getName:{
        value:function(){
            return `<h1> name is ${this.name}</h1>`
        }
    },
    getEmail:{
        value:() =>{
            // inside the arrow function this pointer return undefined
            document.writeln(`<h1> email id is = ${this.email}</h1>`)
        }
    }
})

console.log(`user =`,user)

// to avoid runtime errors(exceptions)
try{
    user.name = "Sam"
    user.email = "sam@gmail.com"
    user.city = "Bengaluru"
}catch(error){
    console.log(error)
}

console.log(`after = `,user)