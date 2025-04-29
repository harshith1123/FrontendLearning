// array.fill()

var list = [1,2,3,4,5,6,7]

console.log(`list =`,list)
console.log(`fill =`,list.fill(""))
console.log("\n")

// array.of()
var names = Array.of("John","tom","nik","mike")
console.log(`names =`,names)

// Array.isArray(input) --> check whether the input is array or not
console.log(`prototype =`,Array.isArray(names))

var names = "Mac"
console.log("isArray =",Array.isArray(names))
console.log(`\n`)

// Array.at(index)
var colors = ["red","blue","green","orange","black"]
console.log("colors =",colors.at(-1)) /* last index */
console.log("colors =",colors.at(-2)) /* 2nd last index */

console.log("colors =",colors.at(2))