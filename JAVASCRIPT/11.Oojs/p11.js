// accessor properties (get / set)

let user ={
    firstName : "mary",
    lastName : "Mathew"
}

Object.defineProperty(user,"fullName",{
    get: function(){
        return this.firstName+' '+this.lastName;
    },
    set: function(val){
        [this.firstName,this.lastName] = val.split(" ")
    }
}) // firstName LastName

console.log(`firstName =`,user.firstName)
console.log('lastName =',user.lastName)

console.log('fullName =',user.fullName) // mary mathew

user.firstName = "Tom"
user.lastName = "Henry"
console.log('fullName =',user.fullName) // Tom Henry