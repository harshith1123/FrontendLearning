// Object.getPrototypeOf(cloned object)

let car = {
    title:"Innova",
    company:"toyota",
    model:2024,
    color:"white"
}

let car1 = Object.create(car)

console.log(`car =`,car)
console.log(`car1 =`,car1)

// retrive the object properties from cloned object
let car2 = Object.getPrototypeOf(car1)
console.log(`car2 = `,car2)

// Object.setPrototypeOf(clone,new)
// to update new set of property to cloned object
let car3 = Object.setPrototypeOf(car1,{
    title:"Thar",
    company:"Mahindra",
    model:2023,
    color:"red",
    type:"electric"
})

console.log(`car3 =`,car3)