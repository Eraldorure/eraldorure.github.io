function PlayAudio(url) {
    new Audio(url).play();
}

function SetTextByID(id, text) {
    document.getElementById(id).innerHTML = text;
}