function PlayAudio(url) {
    new Audio(url).play();
}

function SetIDByClass(className, id) {
    document.getElementsByClassName(className)[0].id = id;
}

function SetTextByClass(className, text) {
    document.getElementsByClassName(className)[0].innerHTML = text;
}