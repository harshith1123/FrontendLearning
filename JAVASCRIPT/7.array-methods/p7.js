// removing the duplicates

var ageGroup = [18,20,18,21,23,25,24,23,18,9,11,9]

console.log(`age group =`,ageGroup)

var out = ageGroup.reduce(function(prev,cur){
    console.log(`prev = ${prev} and current = ${cur}`)
    if(prev.indexOf(cur) === -1){
        prev.push(cur)
    }
    return prev
}, [])

console.log(`output =`,out)