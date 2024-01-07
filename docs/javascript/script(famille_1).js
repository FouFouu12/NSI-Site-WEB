var overlay = document.getElementById("overlay");
var information = document.getElementById("information")

var charles = document.getElementById("charles");
var john = document.getElementById("john");
var hedy = document.getElementById("hedy");
var seymour = document.getElementById("seymour");
var gordon = document.getElementById("gordon");
var hiroshi = document.getElementById("hiroshi");

var popup_information = document.getElementById("popup_information")
var popup_charles = document.getElementById("popup_charles");
var popup_john = document.getElementById("popup_john");
var popup_hedy = document.getElementById("popup_hedy");
var popup_seymour = document.getElementById("popup_seymour");
var popup_gordon = document.getElementById("popup_gordon");
var popup_hiroshi = document.getElementById("popup_hiroshi");

var closePopup_information = document.getElementById("popupclose_information")
var closePopup_charles = document.getElementById("popupclose_charles");
var closePopup_john = document.getElementById("popupclose_john");
var closePopup_hedy = document.getElementById("popupclose_hedy");
var closePopup_seymour = document.getElementById("popupclose_seymour");
var closePopup_gordon = document.getElementById("popupclose_gordon");
var closePopup_hiroshi = document.getElementById("popupclose_hiroshi");

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
information.onclick = function(){
    showpopup(popup_information)
}
closePopup_information.onclick = function(){
    closePopup(popup_information)
}
charles.onclick = function(){
    showpopup(popup_charles)
}
closePopup_charles.onclick = function(){
    closePopup(popup_charles)
}
john.onclick = function(){
    showpopup(popup_john)
}
closePopup_john.onclick = function(){
    closePopup(popup_john)
}
hedy.onclick = function(){
    showpopup(popup_hedy)
}
closePopup_hedy.onclick = function(){
    closePopup(popup_hedy)
}
seymour.onclick = function(){
    showpopup(popup_seymour)
}
closePopup_seymour.onclick = function(){
    closePopup(popup_seymour)
}
gordon.onclick = function(){
    showpopup(popup_gordon)
}
closePopup_gordon.onclick = function(){
    closePopup(popup_gordon)
}
hiroshi.onclick = function(){
    showpopup(popup_hiroshi)
}
closePopup_hiroshi.onclick = function(){
    closePopup(popup_hiroshi)
}
