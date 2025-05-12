/* 
    1. Object
        Object Constructor
        Object Constructor Methods
        Inheritance
        Inheritance Chaing
            __proto__ keyword

    2. Constructor
        Custom Constructors
        Types
        Constructor Methods
        Prototypes
    
    3. Class
        Types
        OOPS Concepts
    
    4. Promise Constructor
        AJAX Call
        REST API Call
    
    5. Map Constructor - entries

    6. Set Constructor

    7. Properties
*/

var user ={
    name: "john",
    email: "john@gmail.com",
    age:22,
    city: "bengaluru",
    isAdmin: false,
    hobbies:["riding","cycling","driving"],
    getName :function(){
        document.writeln(`<h1>user name is ${this.name}</h1>`)
    },
    getCity: () =>{
        // this keyword is not functional
        return "city name is"+ this.city;
    }
}

user.getName()
document.writeln(`<h3> email is = ${user.email}</h3>`)
document.writeln(`<h3> age is = ${user.age}</h3>`) // object.key
document.writeln(`<h3> isAdmin is = ${user["isAdmin"]}</h3>`) // object["key"]

document.writeln(`<h3> ${user.getCity()}</h3>`)

user.hobbies.forEach(function(item){
    document.writeln(`<h4>${item}</h4>`)
})

console.log(`user =`,user)
document.writeln(`${user}`) // [object Object]