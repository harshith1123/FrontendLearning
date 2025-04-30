// custom constructor

/* 
    1. constructor follows function structure
    2. First letter uppercase (not mandatory)
    3. constructor can't return
    
*/

function User(){
    this.name = "John"
    this.age =21,
    this.city = "bengaluru"
}
let x = new User()

console.log(`name =`,x.name)
console.log(`age =`,x.age)
console.log(`city =`,x.city)

// parameterised constructor
function Product(a,b){
    this.x = a;
    this.y = b;
    this.calc = function(){
        return this.x * this.y
    }
}
let p1 = new Product(10,2);
console.log(`product =`,p1.calc())

p1 = new Product(35,2)
console.log(`product =`,p1.calc())