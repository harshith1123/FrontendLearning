// string methods of date constructors

var today = new Date()
console.log("today =",today)

document.writeln(`<h3>${today.toDateString()}</h3>`)
document.writeln(`<h3>${today.toLocaleDateString()}</h3>`)

document.writeln(`<h3> ${today.toTimeString() }</h3>`)
document.writeln(`<h3> ${today.toLocaleTimeString() }</h3>`)

// return date in ms
document.writeln(`<h3> ${Date.now() } ms</h3>`)