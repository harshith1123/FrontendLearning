//  array.slice(start,end)

var colors =["green","red","blue","orange","slateblue","white"]

let newArr = colors.slice(1,4)

console.log("array =",colors)
console.log("array =",newArr)

// toString and toLocalString()

// converts array elements into string
let arr = [123,true,"welcome",null,undefined];
console.log("arr =",arr)

console.log(`string =`,arr.toString())
console.log(`string =`,arr.toLocaleString())