// method overload

class Sum{
    constructor(a,b){
        this.x = a;
        this.y = b;
    }

    calc(c){
        return this.x + this.y +c;
    }    
}

class Mathexp extends Sum{
    constructor(p,q,r){
        super(p,q);
        this.c = r;
    }
    calc(d,e){
        return super.calc(this.c) + d + e;
    }
}

let m1 = new Mathexp(1,2,3);

document.writeln(`<h1> sum= ${m1.calc(3,4)}</h1>`)