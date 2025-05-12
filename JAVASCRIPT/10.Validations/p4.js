let cardEl = document.getElementById("card")
let statusEl = document.getElementById("status")

function submitHandler(event){
    event.preventDefault()

    let card = cardEl.value

    let regex =/^[1-9]\d{3}{4}{4}{4}$/
    if(card ===""){
        statusEl.innerText = "card number is empty"
        statusEl.classList.add("danger")
        setTimeout(function(){
            statusEl.classList.remove("danger")
            statusEl.innerText=""
        },4000)
    }else{
        if(regex.test(card)){
            statusEl.innerText="card is valid"
            statusEl.classList.add("success")
            setTimeout(function(){
                statusEl.classList.remove("success")
                statusEl.innerText=""
            },4000)
        }else{
            statusEl.innerText="incorrect card number"
            statusEl.classList.add("danger")
            setTimeout(function(){
                statusEl.classList.remove("danger")
                statusEl.innerText=""
            },4000)
        }
    }
}