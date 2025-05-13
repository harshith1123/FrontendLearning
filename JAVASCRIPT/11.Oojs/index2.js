let lenEl = document.querySelector("#length")
let breadEl = document.querySelector("#breadth")
let resEl = document.querySelector(".result")

function submitHandler(event){
    event.preventDefault();
    
    let length = Number(lenEl.value)
    let breadth = Number(breadEl.value)
    let x = new Rectangle(length,breadth)
    resEl.innerHTML=`<h3>Area of Reactangle = ${x.getResult()}</h3>`

}

function Rectangle(len,bread){
    this.length = len;
    this.breadth = bread;
    this.getResult = function(){        
        return  this.length * this.breadth;
    }

}
