let pop_up = sessionStorage.getItem('pop-up');

if (!pop_up) {
    window.onload = function () {
        alert("Plus tard, cherchez Martin le Lutin, il pourrait vous aider à retourner à la page précédente!");
    }

    sessionStorage.setItem('pop-up','True')
}
