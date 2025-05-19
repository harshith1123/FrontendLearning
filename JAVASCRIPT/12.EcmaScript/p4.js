// default parameter

function product(x,y){
    document.writeln(`<h3>product = ${x * y}</h3>`)
}
function product(x,y=4){
    document.writeln(`<h3>product = ${x * y}</h3>`)
}


product(10) // NaN
product(10,2)