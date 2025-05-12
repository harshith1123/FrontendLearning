// Object.defineProperties(obj,{})

let product = {}

console.log(`product =`,product)

Object.defineProperties(product,{
    id:{
        value:1
    },
    title:{
        value: "Vivo v30"
    },
    category:{
        value:"Mobile"
    },
    price:{
        value:12345
    }
})

console.log(`product =`,product)