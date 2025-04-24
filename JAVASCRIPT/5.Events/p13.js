let cmenu = document.querySelector(".context-menu")
let pBody = document.querySelector("body")
let cls = document.querySelector("body")

pBody.addEventListener("contextmenu",(event)=>{
    event.preventDefault(); // to avoid page refresh
    console.log(`x = ${event.clientX} and y=${event.clientY}`)

    cmenu.style.left = `${event.clientX}px`
    cmenu.style.top = `${event.clientY}px`

    cmenu.classList.add("active")    
})

cls.addEventListener("click",()=>{
    cmenu.classList.remove("active")
})