var users =[
    {
        id:1,
        first:"Raju",
        last: "Kumar",
        email: "raju@gmail.com"
    },
    {
        id:2,
        first:"John",
        last: "Michel",
        email : "john@gmail.com"
    },
    {
        id:3,
        first:"Raju",
        last:"Sharma",
        email:"raju123@gmail.com"
    },
    {
        id:4,
        first:"Chand",
        last:"Sharma",
        email:"chandu@gmail.com"
    }
];

console.log("users=",users)

// implementing filter method:-single object
/* 
syntax: array.find(function(item){
            return item.id==3
}) */

let res = users.find(function(item){
    return item.id==3
})
console.log("result =",res)

// implementing find method:-array
/* 
syntax: array.filter(function(item){
            return item.prop == value
}) */

let res1 = users.filter(function(item){
    return item.first =="Raju"
})
console.log("result =",res1)