// JSON array


var users =[
    {
        id:1,
        name:"john",
        email:"john@gmail.com",
        age:22,
        city:"bangalore"
    },
    {
       id:2,
        name:"tom",
        email:"tom@gmail.com",
        age:24,
        city:"mangalore" 
    }
]

console.log(`users =`,users)

// to convert object to json string
var out = JSON.stringify(users)
console.log('string =',out)

// to back json string to an object
console.log('object =',JSON.parse(out))

// 2nd example

var ipl = new Array();

ipl[0]={
    id:1,
    name:"csk",
    color:"yellow",
    trophy:5
}

ipl[1]={
    id:2,
    name:"kkr",
    color:"purple",
    trophy:"3"
}
ipl[2]={
    id:3,
    name:"rcb",
    color:"red",
    trophy:"0"
}

var result = JSON.stringify(ipl)
console.log(`ipl =`,result)

console.log('object=',JSON.parse(result))