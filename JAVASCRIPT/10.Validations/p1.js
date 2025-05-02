let nameEl = document.getElementById("name")
let statusEl = document.getElementById("status")

function submitHandler(e){
    e.preventDefault();
    let data = nameEl.value;
    console.log(`user name =`,data)

    // reg
    // let regex = /^[A-Z]$/; // for only validating single capital letter

    let regex = /^[A-Za-z]+$/;

    if(regex.test(data)){
        statusEl.innerHTML = `<h3 class="success">valid name</h3>`
        console.log(`username =`,data)
    }
    else{
        statusEl.innerHTML = `<h3 class="danger">invalid name</h3>`
    }
}