/* patterns */
/* 
1
1 2
1 2 3 4
1 2 3 4 5
 */

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(`${j}`)
    }
    document.writeln(`<br>`)
}

document.writeln(`<br>`)

/* patterns */
/* 
1
2 2
3 3 3 3
4 4 4 4 4
 */

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.writeln(`${i}`)
    }
    document.writeln(`<br>`)
}

/* 
1
2 3
4 5 6
7 8 9 10
11 12 13 14
 */

document.writeln('<br>')
for(let i=5;i>=1;i--){    
    for(let j=1;j<=i;j++){
        document.writeln(`${j} `)
    }
    document.writeln(`<br>`)
}

document.writeln('<br>')

/*
            1
          1   2
        1   2   3
      1   2   3   4
    1   2    3   4   5

*/

for(let i=1;i<=5;i++){
    document.writeln('<span>&nbsp;</span>')
    for(j=1;j<=i;j++){
        document.writeln(`${j} <span>&nbsp;</span>`)
    }
    document.writeln(`<br>`)
}
/*
            1
          1   2
        1   2   3
      1   2   3   4
    1   2    3   4   5
      1    2   3   4
         1   2   3
           1    2 
              1
*/


/* 
*
* *
* * *
* * * *
* *  * *
*/
document.writeln("<hr>")
for(let i=1;i<5;i++){
  for(let j=1;j<=i;j++){
    document.writeln(`*`)
  }
  document.writeln("<br>")
}
document.writeln("<hr>")

/* 
* * * * *
* * * *
* * *
* *
*
*/
for(let i=5;i>=1;i--){
  for(j=1;j<=i;j++){
    document.writeln('*')
  }
  document.writeln("<br>")
}
document.writeln("<hr>")

/*    
        *
       *  *
      *  *  *
    *   *  *  *
   *  *   *  *  * 
 */

for(let i=1;i<=5;i++){
  document.writeln('<span>&nbsp;</span>')
  for(let j=1;j<=i;j++){
    document.writeln('*')
  }
  document.writeln('<br>')
}