// operators
/* 
1. Arithmatic + - * / %
2. Logical && || !
3. Relatinal / conditional  > < >= <= == === !==
    == equal to - check only values
    === strictly equal to - value and data type
4. Assignment = += -= *= /= %=
    x+=10 => (x=x+10)
5. Increment & Decrement
    pre = ++i --i    
    post i++ i--
6. Ternary = (condition ? true: false)
7. other () [] {} '' "" `` ^ $ # @ : ; , . \
*/

let x=123;
let z =1434.5;
let a = "12434.556";

console.log(`sum=`,x+z)
console.log(`sum=`,x+a)
console.log(`diff=`,z-x)
console.log(`product=`,x*z)
console.log(`div=`,z/a)
console.log(`mod=`,z%a)

console.log(`\n`)

let r1=20>30
let r2=44>10

let r3 = r2 && r1

console.log(`and =`,r1 && r2)
console.log(`or =`,r1 || r2)
console.log(`not =`,!r3)

console.log('\n')

let a1= "344"
let a2 = 344;
let a3 = 344;

console.log(`equal to =`, a2 == a3)
console.log(`equal to =`, a1 == a3)

console.log(`strictly equl to =`, a2 === a3)
console.log(`strictly equl to =`, a1 === a3)
console.log('\n')

let p = 23;
console.log(`p =`,p)

p+=40
console.log(`p=`,p)

p-=10
console.log(`p=`,p)

p *=5;
console.log(`p =`,p)  

p %=4;
console.log(`p =`,p)

console.log(`\n`)

let f =33;
console.log(` ++i = `,++f)
console.log(` --i = `,--f)

console.log('\n')

//  conditon ? true : false
let res = 10>4 ? "Hi Harry" :  "Invalid condition"
console.log('res =',res)

let res1 = 10<4 ? "Hi Harry" :  "Invalid condition"
console.log('res1 =',res1)