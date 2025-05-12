let mobileEl = document.getElementById("mobile")
let statusEl = document.getElementById("status")

function submitHandler(event){
    event.preventdefault();

    let mobile = mobileEl.value;
    /* 
        10 digits
        0/91/+91
        start with (6,7,8,9)
    */

    let regex = /^(0|91|\+91)?[6-9]\d{9}$/;
    if(mobile === ""){
        statusEl.innerText = "mobile field must be filled"
        statusEl.classList.add("danger")
        setTimeout(function(){
            statusEl.classList.remove("danger")
            statusEl.innerText =""
        },4000)
    }else{
        if(regex.test(mobile)){
            statusEl.innerText = "valid indian mobile number"
            statusEl.classList.add("success")
            setTimeout(function(){
                statusEl.classList.remove("success")
                statusEl.innerText=""
            },4000)
        }else{
            statusEl.innerText="Invalid Indian mobile number"
            statusEl.classList.add("remove")
            setTimeout(function(){
                statusEl.classList.remove("danger")
                statusEl.innerText=""
            },4000)
        }
    }
}