let radEl = document.getElementById("rad")
let resEl = document.querySelector(".result")

function submitHandler(event){
    event.preventDefault();
    let num = Number(radEl.value);
    let x = new Area(num)
    resEl.innerHTML = `<h3>Area of circle = ${x.calc().toFixed(2)}</h3>`
}

function Area(a){
    this.radius = a;
    this.calc = function(){
        return Math.PI * Math.pow(this.radius,2)
    }
}