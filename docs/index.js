let pop_up = localStorage.getItem('pop-up');

if (!pop_up) {
    window.onload = function () {
        alert("Plus tard, cherchez Martin le Lutin, il pourrait vous aider à retourner à la page précédente!");
    }

    localStorage.setItem('pop-up','True')
}
