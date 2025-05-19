// function hoisting: - calling a function before the function body

// call
sum(10,4)

function sum(a,b){
    document.writeln(`<h3>sum= ${a+b}</h3>`)
}

sum(10,12)

product(10,12)

// ref error for arrow function in hoisting
const product = (a,b)=>{
    document.writeln(`<h3>sum = ${a+b}</h3>`)
}