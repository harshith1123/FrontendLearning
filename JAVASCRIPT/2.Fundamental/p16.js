/* 
    parameter
    return

    1. parameter return type functions
    2. parameter non-return type
    3. non-parameter return type
    4. non-parameter non-return type
*/

// 1. parameter return type functions

function user(name,email){
    return `name is ${name} and email is ${email}`;
}

var res = user("tom","tom@gmail.com")
document.writeln(`<h3> ${res} </h3>`)

// 2. parameter non-return type
function course(title,duration){
    document.writeln(`<h4> course title is ${title} and duration is ${duration} months</h4>`)
}
course("Java",2.5)