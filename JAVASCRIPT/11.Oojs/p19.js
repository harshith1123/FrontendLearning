// param in class

class Product{
    constructor(a,b){
        this.x = a;
        this.y = b;
    }
    calculate(){
        return this.x * this.y;
    }
}

let p = new Product(10,20)
document.writeln(`<h1> product = ${p.calculate()}</h1>`)

p = new Product(65,2)
document.writeln(`<h1>product = ${p.calculate()}</h1>`)

p = new Product(13,2)
document.writeln(`<h1>product = ${p.calculate()}</h1>`)