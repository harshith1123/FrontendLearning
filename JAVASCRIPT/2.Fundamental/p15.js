//  function call by event

function printName(name){
    document.writeln(`<h3>My name is ${name}</h3>`)
}

// through event listeners
var btnEl = document.getElementById("btn")

// dom_element.addEventListener("click",function(parameter){})

btnEl.addEventListener("click",function(event){
    var name = "Harshit"
    document.writeln(`<h3>My name is ${name}</h3>`)
});

// using dom elements
var loginEl = document.getElementById("login")

// dom_element.event = function(event) {}
loginEl.onclick = function(event){
    alert("login success")
}