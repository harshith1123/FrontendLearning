let togglerBtn = document.querySelector(".toggler-button")
let menuItems = document.querySelector(".menu-items")

togglerBtn.addEventListener("click",function(){
    menuItems.classList.toggle("active-menu")
})

//  get current year from date object
let yr = document.getElementById('yr')
yr.innerText = new Date().getFullYear();