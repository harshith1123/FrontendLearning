setInterval(function(){
    let ck = new Date().toLocaleTimeString()
    document.getElementById("clock").innerText = ck;
},1000)