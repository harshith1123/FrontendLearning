// generator function

function *display(){
// property to generator function
    yield "red";
    yield "black";
    yield "white";
    yield "orange";
}

let out = display();
console.log(`first item`,out.next())
console.log(`second item`,out.next())
console.log(`third item`,out.next())
console.log(`fourth item`,out.next())