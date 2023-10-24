function PlayAudio(url) {
    new Audio(url).play();
}

function SetTextByClass(className, text) {
    document.getElementsByClassName(className)[0].innerHTML = text;
}