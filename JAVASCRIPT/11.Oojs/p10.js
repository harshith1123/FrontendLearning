// Object.entries()

let car = {
    title: "Jeep",
    company: "Mahindra",
    color:"red",
    year:2025
}

console.log(`car =`,car)
console.log("\n")

let out = Object.entries(car) // array of array[key,value]
console.log(`entries =`,out)

// Object.fromEntries()

let out1 = Object.fromEntries(out) // entries to object
console.log(`object =`,out1)