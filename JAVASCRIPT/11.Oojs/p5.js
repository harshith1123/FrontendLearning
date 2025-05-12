// Object.defineProperty(obj,key,value)

let user = {}; // empty object

console.log(`user =`,user)
// is used to add a single key:value pair from externally
Object.defineProperty(user,"name",{
    value:"Mary"
})
console.log(`user =`,user)

Object.defineProperty(user,"age",{
    value:22
})
console.log('user =',user)

Object.defineProperty(user,"email",{
    value:"mary@gmail.com"
})
console.log('user =',user)
Object.defineProperty(user,"getEmail",{
    value:function(){
        document.writeln(`<h3>email is ${this.email}</h3>`)
    }
})
console.log('user =',user)

