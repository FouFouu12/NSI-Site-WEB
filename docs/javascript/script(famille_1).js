var closePopup_charles = document.getElementById("popupclose_charles");
var closePopup_john = document.getElementById("popupclose_john")
var overlay = document.getElementById("overlay");
var charles = document.getElementById("charles");
var john = document.getElementById("john");
var popup_charles = document.getElementById("popup_charles");
var popup_john = document.getElementById("popup_john")

function closePopup(popup){
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

function showpopup(popup){
    overlay.style.display = 'block';
    popup.style.display = 'block';
}
charles.onclick=function(){
    showpopup(popup_charles)
}
closePopup_charles.onclick=function(){
    closePopup(popup_charles)
}
john.onclick=function(){
    showpopup(popup_john)
}
closePopup_john.onclick=function(){
    closePopup(popup_john)
}

