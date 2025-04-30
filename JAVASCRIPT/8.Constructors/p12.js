console.log('random =',Math.random()) // 0 -1

console.log('\n')

console.log('math exp(1)',Math.exp(1)) // 2.718
console.log('math exp(-1)',Math.exp(-1)) // 0.367
console.log('math exp(0)',Math.exp(0)) //1

// math constants

document.writeln(`<h3> (Eulers) .E = ${Math.E}</h3>`)
document.writeln(`<h3> Math.PI  = ${Math.PI}</h3>`)
document.writeln(`<h3> Math.LN2  = ${Math.LN2}</h3>`)
document.writeln(`<h3> Math.LN10 = ${Math.LN10}</h3>`)
document.writeln(`<h3> Math.LOG2E = ${Math.LOG2E}</h3>`)
document.writeln(`<h3> Math.LOG10E = ${Math.LOG10E}</h3>`)
document.writeln(`<h3> Math.SQRT1_2 = ${Math.SQRT1_2}</h3>`)
document.writeln(`<h3> Math.SQRT2 = ${Math.SQRT2}</h3>`)

// min and max values
var x = Math.min()
console.log("Math.min()=",Math.min())  // Infinity

var y = Math.max()
console.log("Math.max() =",Math.max()) // -Infinity

// lexicographical comparison x > y =1 , x<y =-1, x === y =0

console.log(`Infinity > -Infinity =`,x>y) // true
console.log(`Infinity < -Infinity =`,x<y) // false
console.log(`Infinity === -Infinity =`,x==y) // false
