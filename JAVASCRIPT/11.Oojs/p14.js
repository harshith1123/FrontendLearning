// Constructors
/* 
    1. it follows a function
    2. name of constructor first letter is uppercase (not mandatory)
    3. parameter and non - parameter constructor
    4. no return type
    5. every property of constructor create using 'this' keyword
    6. we access property of constructor by ref/instance using new keyword

    function Constructor(params){
        this.property = value;
    }

    let ref = new Constructor(params);
    ref.property
*/

function User(){
    this.name = "john",
    this.email = "john@gmail.com",
    this.mobile = 701933451,
    this.age = 21,
    this.hobbies = ["riding","driving"],
    this.account = {
        bankName: "SBI",
        accNo:1233451
    };
    this.city = "bengaluru",
    this.getUser = function(){
        return "user name is "+ this.name;        
    };
    this.getEmail = ()=>{
        document.writeln(`<h3> user email = ${this.email}</h3>`)
    }
}

let x = new User();
console.log(`object/ref/instance =`,x)

console.log(`<h3>${x.getUser()}</h3>`)
x.getEmail

document.writeln(`<h3>mobile = ${x.mobile}</h3>`)
document.writeln(`<h3>age = ${x["age"]}</h3>`)
document.writeln(`<h3>bank = ${x.account.bankName}</h3>`)
document.writeln(`<h3>account = ${x.account.accNo}</h3>`)
document.writeln(`<h3>city = ${x.city}</h3>`)

x.hobbies.forEach(function(val){
    console.log(`${val}`)
})