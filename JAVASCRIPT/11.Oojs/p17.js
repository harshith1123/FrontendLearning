// no properties inside the constructor and adding properties outside with functions and accessing properties inside functions

function  Car(){

}

// Constructor.propertye.property = value

Car.prototype.title = "Innova";
Car.prototype.color = "white";
Car.prototype.year = 2024;

Car.prototype.getCarInfo = function(){
    document.writeln(`<h1> car is  ${this.title}, color is ${this.color} and year is ${this.year}</h1>`)
}

let x = new Car();
x.getCarInfo();

console.log('title =',x.title)
console.log('color =',x.color)
console.log('year =',x.year)