//  functions

/* 
    functions are block of program or logic executes through call.

    1. function body
            function name(param){
                // statements
            }

            // assignment:
            var getName =function(param){
                // statements
            }

            // arrow function
            var getUser = () =>{
                // statements
                }
    2. call
         by value
         through events (event attribute)
         through event listeners
         using dom elements
 */

function display(){
    document.writeln("<h3>Welcome to javascript</h3>")
}

display()

var getName = function(name){
    document.writeln(`<h3>My name is ${name} </h3>`)
}

getName()
getName("Tom")

var getCity = (addr)=>{
    document.writeln(`<h4>I live in ${addr}</h4>`)
}

getCity("Bangalore")