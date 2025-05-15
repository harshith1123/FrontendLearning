// prototype keyword:- used to create properties

function Car(){
    this.title = "Jeep";
}

// to create constructor property outside
// Constructor.prototype.property = value;
Car.prototype.color = "red";

let x = new Car();
console.log("x =",x)

document.writeln(`<h3> car title is ${x.title}</h3>`)
document.writeln(`<h3>car color is ${x.color}</h3>`)