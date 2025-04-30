/* 
    built in constructors
    Date()
    Array() 
    Boolean()
    String()
    Number()
    Object()
    
    Custeom_name()
*/

var x = new Date();
console.log(`date object =`,x)
document.writeln(`<h1>${x}</h1>`)

// methods of date - IST
document.writeln(`<h3>Day = ${x.getDay()}</h3>`)
document.writeln(`<h3>Date = ${x.getDate()}</h3>`)
document.writeln(`<h3>month = ${x.getMonth()}</h3>`)  /* 0 -> jan 11-dec */
document.writeln(`<h3>year = ${x.getFullYear()}</h3>`)
document.writeln(`<h3>year = ${x.getYear()}</h3>`)
document.writeln("<hr>")

// methods of time - IST
document.writeln(`<h3> Hour = ${x.getHours()} </h3>`)
document.writeln(`<h3> Min = ${x.getMinutes()} </h3>`)
document.writeln(`<h3> Hour = ${x.getSeconds()} </h3>`)
document.writeln(`<h3> Hour = ${x.getMilliseconds()} </h3>`)
document.writeln("<hr>")

// GMT (Greenwich Mean Time) / UTC (Co-ordinated Universal Time)
document.writeln(`<h3>UTC Date = ${x.getUTCDate() }</h3>`)
document.writeln(`<h3>UTC Day = ${x.getUTCDay() }</h3>`)
document.writeln(`<h3>UTC Month = ${x.getUTCMonth() }</h3>`)
document.writeln(`<h3>UTC year = ${x.getUTCFullYear() }</h3>`)

document.writeln(`<h3>UTC hour = ${x.getUTCHours() }</h3>`)
document.writeln(`<h3>UTC min = ${x.getUTCMinutes() }</h3>`)
document.writeln(`<h3>UTC sec = ${x.getUTCSeconds() }</h3>`)
document.writeln(`<h3>UTC UTC Millisecond = ${x.getUTCMilliseconds() }</h3>`)