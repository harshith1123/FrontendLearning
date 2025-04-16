//  non parameter return

function getName(){
    var name = prompt("Enter your name?");
    document.writeln(`<h3>My name is ${name} </h3>`)
}

// non parameter return
function sum(){
    let x =prompt("Enter your input x?")
    let y = prompt("Enter your input y?")

    return Number(x) + Number(y)    
}

document.writeln(`<h3>sum = ${sum()}</h3>`)