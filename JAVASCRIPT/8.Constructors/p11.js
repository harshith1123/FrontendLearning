// Math object

// methods
document.writeln(`<h3>abs(-12) = ${Math.abs(-12) }</h3>`) // 12
document.writeln(`<h3>abs(24) = ${Math.abs(24) }</h3>`) // 24
document.writeln(`<h3>abs(null) = ${Math.abs(null) }</h3>`) // 0
document.writeln(`<h3>abs([]) = ${Math.abs([]) }</h3>`) // 0
document.writeln(`<h3>abs([2]) = ${Math.abs([2]) }</h3>`) // 2
document.writeln(`<h3>abs('') = ${Math.abs(['']) }</h3>`) // 0
document.writeln(`<h3>abs([1,2,3]) = ${Math.abs([1,2,3]) }</h3>`) // NaN
document.writeln(`<h3>abs({}) = ${Math.abs({}) }</h3>`) // NaN
document.writeln(`<h3>abs("Welcome") = ${Math.abs("Welcome") }</h3>`) // NaN
document.writeln(`<h3>abs("-123") = ${Math.abs("-123") }</h3>`) // 123
document.writeln(`<h3>abs("-123a) = ${Math.abs("-123a") }</h3>`) // NaN

document.writeln("<hr/>")

document.writeln(`<h3> sqrt(25) = ${Math.sqrt(25)}</h3>`)
document.writeln(`<h3> cbrt(25) = ${Math.cbrt(27)}</h3>`)

document.writeln(`<h3>min(27,123,34,3) =${Math.min(27,123,34,3)}</h3>`)
document.writeln(`<h3>max(27,123,34,3) =${Math.max(27,123,34,3)}</h3>`)

document.writeln("<hr>")

document.writeln(`<h3>floor(2.9) =${Math.floor(2.9)}</h3>`) /* lowest int */
document.writeln(`<h3>floor(2.1) =${Math.floor(2.1)}</h3>`) /* lowest int */
document.writeln(`<h3>floor(-3.4) =${Math.floor(-3.4)}</h3>`) /* lowest int */

document.writeln(`<h3>ceil(2.1) =${Math.ceil(2.1)}</h3>`) /* highest int */
document.writeln(`<h3>ceil(2.9) =${Math.ceil(2.9)}</h3>`) /* highest int */
document.writeln(`<h3>ceil(-4.8) =${Math.ceil(-4.8)}</h3>`) /* highest int */

document.writeln(`<h3>round(2.2) =${Math.round(2,2)}</h3>`) /* >=0.49 = lowest */
document.writeln(`<h3>round(2.6) =${Math.round(2,6)}</h3>`) /* <0.5  = highest */
document.writeln(`<h3>round(-2.6) =${Math.round(-2,6)}</h3>`) /* -3 */
document.writeln(`<h3>round(-2.4) =${Math.round(-2.4)}</h3>`) /* -2 */

document.writeln("<hr>")

/* trignometric methods */

document.writeln(`<h3>acos(adj/hyp) = ${Math.acos(8/10)}</h3>`)
document.writeln(`<h3>acos(adj/hyp) = ${Math.acos(-1)}</h3>`)
document.writeln(`<h3>acos(adj/hyp) = ${Math.acos(0)}</h3>`)
document.writeln(`<h3>acos(x) = ${Math.acos(2)}</h3>`)

document.writeln(`<h3>trunc(x) = ${Math.trunc(12,33)}</h3>`)
document.writeln(`<h3>trunc(x) = ${Math.trunc(0.33)}</h3>`)
document.writeln(`<h3>trunc(x) = ${Math.fround(5.389699899).toFixed(3)}</h3>`)

/* 
    Math.acosh(2)        
    Math.asinh(x)        
    Math.atan(x)
    Math.atanh(x)
    Math.atan2(y,x)
    Math.cos(x)
    Math.cosh(x)
    Math.exp(x) E^x Euler's const (2.718)
    Math.fround(x) //float round
    Math.log(x)
    Math.log1p(x)
    Math.log1p(x)
    Math.log10()
    Math.log2(x)
    Math.pow(x,y) x^y
    Math.sign(x)
    Math.sin(x)
    Math.sinh(x)
    Math.tan(x)
    Math.tanh(x)
    Math.trunc(x) -> integer portion of x (removes fractional digits)
*/
