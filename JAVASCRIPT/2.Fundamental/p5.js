// Object :- group of key and value pairs

var car = {
    // key: value 
    title:"Mahindra Thar",
    make: 2025,
    color: "red",
    fwd: false,
    rwd: true,
    company:null,
    body: ["base","hardtop","softtop","topend",true,false,123,""],
    extra:{
        fuel: "diesel"
    }
}

console.log('car =',car) // prototype = object
console.log('type =',typeof car) // datatype = object

//  [object Object]
document.writeln(`<h1>car = ${car} </h1>`) // can't destructure object on DOM


document.writeln(`<h3>title = ${car.title}</h3>`)
document.writeln(`<h3>make = ${car.make}</h3>`)
document.writeln(`<h3>fwd = ${car['fwd']}</h3>`) // object['key']
document.writeln(`<h3>fuel = ${car['extra']['fuel']}</h3>`) 
document.writeln(`<h3>fuel = ${car.extra.fuel}</h3>`) 