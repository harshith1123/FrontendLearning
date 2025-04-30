// geolocation access

function getMyLocation(){
    navigator.geolocation.getCurrentPosition(function(pos){
        console.log(`position is =`,pos)        
    },function(err){
        console.log(err)
    },{
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge: 0

    })
}

// getMyLocation()
setInterval(getMyLocation,4000)