// Object.assign(src,dest)

// it merges the common properties of destination into source

let u1 = {
    name: "Ram",
    email: "ram123@gmail.com"    
}

let u2 = {
    email: "ram12@ygmail.com",
    age:25
}

console.log(`u1 =`,u1)
console.log(`u2 =`,u2)

console.log("\n")

let out = Object.assign(u1,u2)
console.log('out =',out)