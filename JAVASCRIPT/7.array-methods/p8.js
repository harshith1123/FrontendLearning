var students =[
    {name:"John",marks:24},
    {name:"anna",marks:78},
    {name:"sam",marks:56},
    {name:"david",marks:24},
    {name:"johnson",marks:78},
    {name:"alisa",marks:45},
]

function sortMarks(data,ref){
    return data.reduce(function(prev,cur){
        let val = cur[ref]
        if(!prev[val]){
            // create an empty array based on marks
            prev[val] = []
        }
        // push the values
        prev[val].push(cur)
        return prev
    },{})
}
let out =sortMarks(students,"marks")
console.log('output =',out)

// age group of people sort based on ages
var people =[
    {name:"John", age:22},
    {name:"Mike", age:24},
    {name:"Lara", age:23},
    {name:"Kane", age:22},
    {name:"Harry", age:21},
    {name:"Jovil", age:18},
    {name:"Anna", age:24},
    {name:"Winson", age:20},
]

function sortAge(data,ref){
    return data.reduce(function(prev,cur){
        let val = cur[ref]
        if(!prev[val]){
            // create an empty array based on marks
            prev[val] = []
        }
        // push the values
        prev[val].push(cur)
        return prev
    },{})
}
let res =sortAge(people,"age")
console.log('output =',res)