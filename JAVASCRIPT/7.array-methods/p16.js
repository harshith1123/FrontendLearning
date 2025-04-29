// array.reduceRight()

var arr1 =[
    [0,1,2],
    [3,4,5],
    [6,7,8]
];

console.log("array1 =",arr1)

var res = arr1.reduceRight(function(prev,cur){
    return prev.concat(cur)
})

console.log(`output =`,res)
console.log(`length =`,res.length)