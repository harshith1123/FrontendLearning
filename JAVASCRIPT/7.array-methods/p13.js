// array.map(function(val1,index){ return val})

var names = ["john","mark","tom","harry","sam"]
console.log(`names =`,names)

var out = names.map(function(val,index){
    return "Mr/Miss" + val
})

console.log("output =",out)