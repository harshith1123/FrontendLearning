// fetch() :- to call any REST api

let URL = "https://dummyjson.com"

let resp = fetch(`${URL}/products`,{
    method:"GET",
    headers:{
        "ContentType": "application/json"
    }
 }).then(res=>res.json())
//  .then(res=>{
//     console.log(`resolved =`,res)
// }).catch(err => {
//     console.error(err.message)
// })

console.log(`res =`,resp )

resp.then(res =>{
     console.log('res =',resp)
}).catch(err =>{
     console.err(err.message)
})

