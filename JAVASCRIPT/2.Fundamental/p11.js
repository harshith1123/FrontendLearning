//  Array

/* Group of values(not mandatory to be similar type)

    types
    1. Single array
        a. Literal
        b. Array using constructor (assignment)
        c. Array using constructor (parameter)

    2. Object array
         group of objects
    3. JSON Array (server response)
*/

//  single (literal array)
var users = ["john","tom","harry","alan"]
console.log(`array=`,users)
console.log(`2nd user=`,users[1])

document.writeln(`<h2> user${users}</h2>`)
document.writeln(`<h4> 2nd user: ${users[2]}</h4>`)

// loop iteration
let i=0;
while(i < users.length){
    document.writeln(`<p>${users[i]}</p>`)
    i++;
}

// array.forEach(function(val,index){})  // array iterator
users.forEach(function(val,index){
    document.writeln(`<h5> ${index} ${val}</h5>`)
})

// single => array using constructor(assignment)
var color = new Array();
color[0] = "red";
color[1] = "blue";
color[2] = "green";
color[3] = "yellow";

console.log(`colors =`,color)

//  using for loop 
for(let i =0;i< color.length;i++){
    document.writeln(`<h4>${i} ${color[i]}</h4>`)
}
document.writeln('<br>')

// single => array using constructor(parameter)
var cars = new Array("Toyota Innvoa","Mahindra Thar","Hundai i20")

console.log('cars =',cars)

document.writeln('<br>')

// using for in loop --> it carries index of an aray
for(let item in cars){
    document.writeln(`<h4>${item} ${cars[item]}</h4>`)
}
document.writeln('<hr>')
//  using for of loop --> it carries the value of an array
for(let val of cars){
    document.writeln(`<h4>${val}</h4>`)
}

document.writeln('<hr>')

// array.map(function(val,index){ return })

let out = users.map(function(val,index){
    return `Mr/Mrs ${val}`
})

console.log(`map output=`,out);