console.log("Script Loaded!");

var keyA = document.getElementById("a");
var keyS = document.getElementById("s");
var keyD = document.getElementById("d");
var keyF = document.getElementById("f");
var keyG = document.getElementById("g");
var keyH = document.getElementById("h");
var keyJ = document.getElementById("j");
var keyK = document.getElementById("k");
var keyL = document.getElementById("l");

var audio1 = new Audio("audio/boom.wav");
var audio2 = new Audio("audio/clap.wav");
var audio3 = new Audio("audio/hihat.wav");
var audio4 = new Audio("audio/kick.wav");
var audio5 = new Audio("audio/openhat.wav");
var audio6 = new Audio("audio/ride.wav");
var audio7 = new Audio("audio/snare.wav");
var audio8 = new Audio("audio/tink.wav");
var audio9 = new Audio("audio/tom.wav");

document.body.onkeypress = function(input){
    var key = input.keyCode;
    console.log(key + " key pressed");
    if(key === 97){
        audio1.play();
        keyA.classList.add("d-shadow");
    }
    else if(key === 115){
        audio2.play();
        keyS.classList.add("d-shadow");
    }
    else if(key === 100){
        audio3.play();
        keyD.classList.add("d-shadow");
    }
    else if(key === 102){
        audio4.play();
        keyF.classList.add("d-shadow");
    }
    else if(key === 103){
        audio5.play();
        keyG.classList.add("d-shadow");
    }
    else if(key === 104){
        audio6.play();
        keyH.classList.add("d-shadow");
    }
    else if(key === 106){
        audio7.play();
        keyJ.classList.add("d-shadow");
    }
    else if(key === 107){
        audio8.play();
        keyK.classList.add("d-shadow");
    }
    else if(key === 108){
        audio9.play();
        keyL.classList.add("d-shadow");
    }
}
document.body.onkeyup = function(input){
    keyA.classList.remove("d-shadow");
    keyS.classList.remove("d-shadow");
    keyD.classList.remove("d-shadow");
    keyF.classList.remove("d-shadow");
    keyG.classList.remove("d-shadow");
    keyH.classList.remove("d-shadow");
    keyJ.classList.remove("d-shadow");
    keyK.classList.remove("d-shadow");
    keyL.classList.remove("d-shadow");
}
