let heigEl = document.querySelector("#height")
let baseEl = document.querySelector("#base")
let resEl = document.querySelector(".result")

function submitHandler(event){
    event.preventDefault();
    
    let base = Number(baseEl.value)
    let height = Number(heigEl.value)
    let x = new Triangle(height,base)
    resEl.innerHTML=`<h3>Area of Triangle = ${x.getResult()}</h3>`

}

function Triangle(height,base){
    this.base = base;
    this.height = height;
    this.getResult = function(){        
        return  this.base * this.height;
    }

}
