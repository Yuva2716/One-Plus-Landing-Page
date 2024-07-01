

var popupimg1 = document.getElementById("img-1-mob")
var popuptext1 = document.getElementById("img-cont-1-mobil")
var popupimg2 = document.getElementById("img-2-mob")
var popuptext2 = document.getElementById("img-cont-2-mobil")
// var undeline = document.querySelector(".btn-2")

function show1(){
    popupimg1.style.display ="inline"
    popuptext1.style.display="inline"
    popupimg2.style.display ="inline"
    popuptext2.style.display="inline"
    // undeline.style.textDecoration="none"

    popupimg3.style.display ="none"
    popuptext3.style.display="none"
    popupimg4.style.display ="none"
    popuptext4.style.display="none"

}

var popupimg3 = document.getElementById("img-3-mob")
var popuptext3 = document.getElementById("img-cont-3-mobil")
var popupimg4 = document.getElementById("img-4-mob")
var popuptext4 = document.getElementById("img-cont-4-mobil")
var underline = document.querySelector(".btn-1")

function show2(){
    
    popupimg1.style.display ="none"
    popuptext1.style.display="none"
    popupimg2.style.display ="none"
    popuptext2.style.display="none"
    underline.style.textDecoration="none"
    
    popupimg3.style.display ="inline"
    popuptext3.style.display="inline"
    popupimg4.style.display ="inline"
    popuptext4.style.display="inline"

}
