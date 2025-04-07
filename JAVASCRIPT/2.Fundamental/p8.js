/* 
    Find the Students grades ref using marks
    david   80
    john    77.5
    mary    67.36
    lora    89.53

    70 > marks <=100 Distinction
    60 >= marks < 70 First
    35 >= marks < 60 Second
    marks <35    Fail    
*/

let marks= 70;

switch(true){
    case (marks>=70 || marks<=100):
            console.log("Distinction")
            break;
    
    case (marks>=60 && marks<70):
            console.log("First")
            break;
    
    case (marks>=35 && marks <60) :
            console.log("Second")
            break;
    
    case (marks<35):
            console.log("Fail")
            break;
    
    default:console.log("Invalid marks")
}