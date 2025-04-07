// conditional statements

/* 
    if(condition){
        // true
    }
*/

let x =30;
if(x< 56){
    console.log(`input ${x} is less than 56`)
}

console.log(`\n`)

/*
    if(condition){
        true
    }else{
        false
    }
*/

let z =33;
if(z < x){
    console.log(`condition is true`)
}
else{
    console.log(`condition is false`)
}

/*
    if(condition){
        true
    }else if(condition2) {
        true
    }else if(conditon3){
        true
    }else{
        false
    }
*/

let day =9;

if(day === 1 ){
    console.log(`monday`)
}
else if(day ===2){
    console.log(`tuesday`)
}
else if(day ===3){
    console.log('wednesday')
}
else if(day ===4){
    console.log('thursday')
}
else if(day ===5){
    console.log('friday')
}
else if(day ===6){
    console.log('saturday')
}
else if(day ===7){
    console.log('sunday')
}
else{
    console.log("invalid day")
}

console.log('\n')

/* 
    switch(key){
        case value1:
            break;
        case value2:
            break;
        default:            
    }
    */

switch(day){
    case 1: console.log("monday");
            break;
    case 2: console.log("tuesday")
            break;
    case 3: console.log('wednesday')
            break;
    case 4: console.log('thursday')
            break;
    case 5: console.log('friday')
            break;
    case 6: console.log('saturday')
            break;
    case 7: console.log('sunday')
            break;
    default: console.log('invalid input')
}

let s1 =83;
let s2= 43;
let s3 =56;

let total = s1+s2+s3;
let avg = total/3;
console.log(avg)