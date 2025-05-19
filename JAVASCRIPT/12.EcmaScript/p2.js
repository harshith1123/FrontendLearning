// const 

const a = 10;
console.log(`a =`,a)

try{
    a = 24; // re assign to the const variable
}catch(error){
    console.log(error)
}
console.log(`after =`,a,)
console.log("\n")

// object reassignment even for const
const num = {
    x:55
}

console.log(`x =`,num.x)
try{
    num.x = 124;
}catch(error){
    console.log(error)
}
console.log('after =',num.x)