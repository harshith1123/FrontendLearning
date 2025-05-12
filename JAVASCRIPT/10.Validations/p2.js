let emailEl = document.getElementById("email")
let statusEl = document.getElementById("status")

function submitHandler(event){
    event.preventDefault();
    let email = emailEl.value
    console.log("email =",email)

    // default format of email: - string@string.string
    // let regex = /^\S+@\S+\.\S+$/
    let regex = /^[a-z0-9-_]+@[a-z0-9-]+?\.[com|in|org|net]+$/;

    if(email===''){
        statusEl.innerText =`email field must be filled.`
        statusEl.classList.add("danger")
        setTimeout(function(){
            statusEl.classList.remove("danger")
            statusEl.innerText=""
        },4000)
    }else{
        if(regex.test(email)){
            statusEl.innerText="Valid email id"
            statusEl.classList.add("success")
            setTimeout(function(){
                statusEl.classList.remove("success")
                statusEl.innerText = ""
            },4000)
        }else{
            statusEl.innerText = "Invalid email format"
            statusEl.classList.add("danger")
            setTimeout(function(){
                statusEl.classList.remove("danger")
                statusEl.innerText =""
            },4000)
        }
    }
}