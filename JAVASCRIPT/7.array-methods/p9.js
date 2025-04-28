let ageGroup = [18, 21, 1,1,51, 18, 21, 5,7,10];

console.log("before =",ageGroup)

//  array.sort(function(a,b){ return a -b / b -a})

var asc = ageGroup.sort(function(a,b){
    return a - b
})

console.log(`asc =`,asc)

var dsc = ageGroup.sort(function(a,b){
    return b-a
})

console.log(`dsc =`,dsc)