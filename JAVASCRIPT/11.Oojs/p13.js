let u1 = {
    name:"Sam",
    email:"sam@gmail.com"
}
let u2 = {
    age:21,
    mobile:7019333451,
    __proto__:u1
}

let u3 = {
    city:"bengaluru",
    zip:"560010",
    __proto__:u2
}
let u4 = {
    state:"Karnataka",
    country:"India",
    __proto__:u3
}

console.log("u4 =",u4)