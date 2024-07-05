let stopbuttonElement = document.getElementById("stopButton");
let readybuttonElement = document.getElementById("readyButton");
let gobuttonElement = document.getElementById("goButton");

let circleRed = document.getElementById("stopLight");
let circleYellow = document.getElementById("readyLight");
let circleGreen = document.getElementById("goLight");

function stopRed() {
    stopbuttonElement.style.backgroundColor = "#cf1124";
    readybuttonElement.style.backgroundColor = "#1f1d41";
    gobuttonElement.style.backgroundColor = "#1f1d41";

    circleRed.style.backgroundColor = "#cf1124";
    circleYellow.style.backgroundColor = "#4b5069";
    circleGreen.style.backgroundColor = "#4b5069";
}

function readyYellow() {
    stopbuttonElement.style.backgroundColor = "#1f1d41";
    readybuttonElement.style.backgroundColor = "#f7c948";
    gobuttonElement.style.backgroundColor = "#1f1d41";

    circleRed.style.backgroundColor = "#4b5069";
    circleYellow.style.backgroundColor = "#f7c948";
    circleGreen.style.backgroundColor = "#4b5069";
}

function goGreen() {
    stopbuttonElement.style.backgroundColor = "#1f1d41";
    readybuttonElement.style.backgroundColor = "#1f1d41";
    gobuttonElement.style.backgroundColor = "#199473";

    circleRed.style.backgroundColor = "#4b5069";
    circleYellow.style.backgroundColor = "#4b5069";
    circleGreen.style.backgroundColor = "#199473";
}