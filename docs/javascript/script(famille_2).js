var overlay = document.getElementById("overlay");

var hypathie = document.getElementById("hypathie");
var georges = document.getElementById("georges");
var jacques = document.getElementById("jacques");
var ingrid = document.getElementById("ingrid");
var jocelyne = document.getElementById("jocelyne");
var alonzo = document.getElementById("alonzo");

var popup_hypathie = document.getElementById("popup_hypathie");
var popup_georges = document.getElementById("popup_georges");
var popup_jacques = document.getElementById("popup_jacques");
var popup_ingrid = document.getElementById("popup_ingrid");
var popup_jocelyne = document.getElementById("popup_jocelyne");
var popup_alonzo = document.getElementById("popup_alonzo");

var closePopup_hypathie = document.getElementById("popupclose_hypathie");
var closePopup_georges = document.getElementById("popupclose_georges");
var closePopup_jacques = document.getElementById("popupclose_jacques");
var closePopup_ingrid = document.getElementById("popupclose_ingrid");
var closePopup_jocelyne = document.getElementById("popupclose_jocelyne");
var closePopup_alonzo = document.getElementById("popupclose_alonzo");

function closePopup(popup){
    overlay.style.display = "none";
    popup.style.display = "none";
    background.style.filter = "blur(0px)"
}

function showpopup(popup){
    overlay.style.display = "block";
    popup.style.display = "block";
    background.style.filter = "blur(50px)"
}
hypathie.onclick = function(){
    showpopup(popup_hypathie)
}
closePopup_hypathie.onclick = function(){
    closePopup(popup_hypathie)
}
georges.onclick = function(){
    showpopup(popup_georges)
}
closePopup_georges.onclick = function(){
    closePopup(popup_georges)
}
jacques.onclick = function(){
    showpopup(popup_jacques)
}
closePopup_jacques.onclick = function(){
    closePopup(popup_jacques)
}
ingrid.onclick = function(){
    showpopup(popup_ingrid)
}
closePopup_ingrid.onclick = function(){
    closePopup(popup_ingrid)
}
jocelyne.onclick = function(){
    showpopup(popup_jocelyne)
}
closePopup_jocelyne.onclick = function(){
    closePopup(popup_jocelyne)
}
alonzo.onclick = function(){
    showpopup(popup_alonzo)
}
closePopup_alonzo.onclick = function(){
    closePopup(popup_alonzo)
}