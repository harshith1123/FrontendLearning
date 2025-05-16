/* 
    Promise Constructor
        It has 4 states
        1. fullfilled - resolve  - then(res=> {})
        2. rejected - reject - catch(err - {})
        3. pending
        4. settled

        fullfilled and rejected will handled by user
*/

function product(a,b){
    return new Promise(function(resolve,reject){
        if(typeof a!== "number" || typeof b!=="number"){
            reject(new Error("The input must be a number."))
        }
        resolve(a*b)
    })
}

let out = product(10,"4");

//  console.log(`out =`,out)

out.then(res=> {
    console.log(`output =`,res)
}).catch(err => console.log('output =',err))
