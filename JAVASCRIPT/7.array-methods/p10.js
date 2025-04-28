var colors = ["red","green","blue","yellow"]
console.log('before =',colors)

// arrays.copyWithin(target,source)

colors.copyWithin(3,1)
console.log('after =',colors)
console.log("\n")
// array.entries()

var names = ["mark","harry","john"]
console.log(`names =`,names)

let out = names.entries()
console.log(`entries =`,out)

for(let item of out){
    console.log('item =',item)  // [index,value] / [key,value]
}