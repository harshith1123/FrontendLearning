// method overriding

class Course{
    constructor(ti){
        this.title = ti;
    }
    getData(){
        return `course is ${this.title}`;
    }
}

class Person extends Course{
    constructor(na,ti){
        super(ti)
        this.name = na;
    }
    getData(){
        document.writeln(`<h1>hi, ${this.name} and ${super.getData()}</h1>`)
    }
}

let x = new Person("Harry","ReactJS")
x.getData();