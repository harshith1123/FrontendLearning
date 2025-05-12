let user = {}

Object.defineProperty(user,"name",{
    value:"Harry",
    writable:true
})

console.log(`user =`,user)

// re assign the value
user.name = "Tom"

/* 
    writable => true = re-assign another value to / re-write 
                false = disabled the re-assign
 */

console.log(`after user =`,user)