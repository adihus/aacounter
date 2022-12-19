let hcount = 0
let gcount = 0
let HomeCount = document.getElementById("home-score")
let GuestCount = document.getElementById("guest-score")

function hincrement(multiplier){
    hcount = hcount + multiplier
    HomeCount.innerText = hcount
}

function gincrement(multiplier){
    gcount = gcount + multiplier
    GuestCount.innerText = gcount
}
