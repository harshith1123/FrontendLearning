// array.flat() -> returns new array with all sub array elements concatinated into it recursively up to the specified depth

var num =[0,1,[2,3,4,[5,6,[7,8,[9]]]]]

console.log("num =",num)
console.log("num =",num.flat(1))
console.log("num =",num.flat(2))
console.log("num =",num.flat(3))
console.log("num =",num.flat(4))

console.log("\n")

// flat all nested array in single statement
var num1 = [0,1,[2,3,4,[5,6,[7,8,[9]]]]]
console.log("num1 =",num1.flat(Infinity))