var overlay = document.getElementById("overlay");

var hiroshi = document.getElementById("hiroshi");


var popup_turing = document.getElementById("popup_turing");

var closePopup_turing = document.getElementById("popupclose_turing");

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

turing.onclick = function(){
    showpopup(popup_turing)
}
closePopup_turing.onclick = function(){
    closePopup(popup_turing)
}