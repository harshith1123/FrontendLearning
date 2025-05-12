let product = {
    id:1,
    title:"Dell Laptop",
    category: "computer",
    price: 12345,
    quantity:1
}

console.log(`product =`,product)

// Object.create(obj) -> copy or clone the prototype of one object into another

let product1 = Object.create(product)

console.log('product1 =',product1)

console.log('\n')

// object methods
let user = {
    name:"john",
    email:"john@gmail.com",
    age:22,
    isUser:true
}

// Object constructor
console.log('user = ',user)

// Object.create(obj) -> it will copy/clone the object prototype
let newObj = Object.create(user)

console.log(`newobj =`,newObj)