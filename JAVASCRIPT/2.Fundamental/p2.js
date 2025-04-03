// variables
// datatype variable = value;
/* 
    var - global variable
    let - local variable
    const - constant variable
*/

var x =20;
console.log('x =',x);

var x = 40;
console.log('x=', x);

// In var, it can redeclare with the same variable and allocat different memory for it.

let y = 44;
console.log('y=', y);

// let y =50; --> redeclaration is not possible in let
y = 50; 
console.log('y=', y)

// we can reassign the value to the single variable in a same memory

const z =77;
console.log('z=',z);

// z =50; 
console.log('z=', z) 

// in const, we cannot redeclare new variable and also reassign the new value.