var x = 123.345566

console.log('x =',x)
console.log('x =',typeof x) // number

console.log('x =',x.toFixed(4))
console.log(`x =`,typeof x.toFixed(4)) // string

console.log('x =',x.toPrecision(2)) // 1.2e+

console.log('valueof =', x.valueOf()) // 123.345566

// any value to integer
console.log('int =',parseInt(x))

// any value to floating point value conversion
var y = 33;
console.log('y =',y)
console.log('y in float =',parseFloat(y))

// string to number
var str = "3.4 days"
console.log('str =',str) //NaN
console.log('parseFloat(str) =',parseFloat(str)) // 3.4
console.log(`parseInt(str) =`,parseInt(str)) //3