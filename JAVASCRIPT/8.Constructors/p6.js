// boolean constructor

var x = "true"
var y = "false"

console.log('x =',x)
console.log('x =',typeof x)
console.log('y =',y)
console.log('y =',typeof y)

console.log("\n")

console.log(`Boolean("true")=`,Boolean(x))  // true
console.log(`Boolean('false') =`,Boolean(y))  //true
console.log(`Boolean("false") =`,new Boolean(y)) // true

console.log("Boolean(1) =",Boolean(1)) // true
console.log("Boolean(0) =",Boolean(0)) // false