// scope

/* 
    var -> global scope
    let, const are local scope
*/

// to avoid run time exception(errors) -> try - catch
try{
    if(true){
        var x = 12;
        // let x =12;
        const x = 12;
        console.log("local scope=",x)
    }
    console.log(`global scope =`,x)    
    }catch(error){
        console.log(error)
    }



