// non primitve data types
var users = ["john", "tom", "harry", "mary"]

// data type of all non-primitive variables are object only
// passing any data to the console especially non-primitive types are Prototypes

// prototype of array is Array itself and prototype exist to non-primitive type only
console.log(`users =`,users)
console.log(`users =`, typeof users)  
console.log(`users =`,users.length)
document.writeln(`<h1>users = ${users} </h1>`)  // If we use document.writeln than it will extract as a string.

document.writeln(`<h1>users = ${users[3]} </h1>`)