// object key - It should starts with square bracket and atleast one key value must be unique

var users =[
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        age: 22,
        city: "Bangalore"
    },
    {
        id: 2,
        name: "tom",
        email: "tom@gmail.com",
        age: 24,
        city: "Bangalore"
    }
]

console.log(`users = `,users)

users.forEach(function(val,index){
    document.writeln(`<h1> ${val.id} ${val.name}</h1>`)
    document.writeln(`<h3> ${val.email}</h3>`)
})

//  array using constructor (assignment)

var course = new Array()

//  directy calling index of an array and assigning the value
course[0] ={
    id:1,
    title: "javascript",
    type: "frontend"
};

course[1] ={
    id:2,
    title:"java",
    type: "backend"
}

console.log(`course =`,course)
for(let i in course){
    console.log(`course at ${i}th index=`,course[i])
}

for(let i of course){
    console.log(`${i.id}`)
}

// array using constructor (parameter)
var bikes = new Array({id:1, title:"hero"},{id:2,title:"tvs"},{id:3,title:"honda"})

console.log('bikes=',bikes)