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
        keyA.classList.add("shadow");
    }
    else if(key === 115){
        audio2.play();
        keyS.classList.add("shadow");
    }
    else if(key === 100){
        audio3.play();
        keyD.classList.add("shadow");
    }
    else if(key === 102){
        audio4.play();
        keyF.classList.add("shadow");
    }
    else if(key === 103){
        audio5.play();
        keyG.classList.add("shadow");
    }
    else if(key === 104){
        audio6.play();
        keyH.classList.add("shadow");
    }
    else if(key === 106){
        audio7.play();
        keyJ.classList.add("shadow");
    }
    else if(key === 107){
        audio8.play();
        keyK.classList.add("shadow");
    }
    else if(key === 108){
        audio9.play();
        keyL.classList.add("shadow");
    }
}
document.body.onkeyup = function(input){
    keyA.classList.remove("shadow");
    keyS.classList.remove("shadow");
    keyD.classList.remove("shadow");
    keyF.classList.remove("shadow");
    keyG.classList.remove("shadow");
    keyH.classList.remove("shadow");
    keyJ.classList.remove("shadow");
    keyK.classList.remove("shadow");
    keyL.classList.remove("shadow");
}