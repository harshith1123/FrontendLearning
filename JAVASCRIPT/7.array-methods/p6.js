// reduce(function(ac,cu){})

var num = [10,20,30,40,50,60,70,80,90]

console.log(`num =`,num)

// sum of all numbers
var out = num.reduce(function(prev,cur){
    console.log(`prev =${prev} and cur=${cur} `)
    return prev + cur
})
console.log(`output =`,out)