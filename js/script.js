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
    //console.log(key + " key pressed");
    if(key === 55){
        audio1.play();
        keyA.classList.add("d-shadow");
    }
    else if(key === 52){
        audio2.play();
        keyS.classList.add("d-shadow");
    }
    else if(key === 49){
        audio3.play();
        keyD.classList.add("d-shadow");
    }
    else if(key === 56){
        audio4.play();
        keyF.classList.add("d-shadow");
    }
    else if(key === 53){
        audio5.play();
        keyG.classList.add("d-shadow");
    }
    else if(key === 50){
        audio6.play();
        keyH.classList.add("d-shadow");
    }
    else if(key === 57){
        audio7.play();
        keyJ.classList.add("d-shadow");
    }
    else if(key === 54){
        audio8.play();
        keyK.classList.add("d-shadow");
    }
    else if(key === 51){
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

keyA.onmousedown = function(input){
    audio1.play();
    keyA.classList.add("d-shadow");
}
keyA.onmouseup = function(input){
    keyA.classList.remove("d-shadow");
}

keyS.onmousedown = function(input){
    audio2.play();
    keyS.classList.add("d-shadow");
}
keyS.onmouseup = function(input){
    keyS.classList.remove("d-shadow");
}

keyD.onmousedown = function(input){
    audio3.play();
    keyD.classList.add("d-shadow");
}
keyD.onmouseup = function(input){
    keyD.classList.remove("d-shadow");
}

keyF.onmousedown = function(input){
    audio4.play();
    keyF.classList.add("d-shadow");
}
keyF.onmouseup = function(input){
    keyF.classList.remove("d-shadow");
}

keyG.onmousedown = function(input){
    audio5.play();
    keyG.classList.add("d-shadow");
}
keyG.onmouseup = function(input){
    keyG.classList.remove("d-shadow");
}

keyH.onmousedown = function(input){
    audio6.play();
    keyH.classList.add("d-shadow");
}
keyH.onmouseup = function(input){
    keyH.classList.remove("d-shadow");
}

keyJ.onmousedown = function(input){
    audio7.play();
    keyJ.classList.add("d-shadow");
}
keyJ.onmouseup = function(input){
    keyJ.classList.remove("d-shadow");
}

keyK.onmousedown = function(input){
    audio8.play();
    keyK.classList.add("d-shadow");
}
keyK.onmouseup = function(input){
    keyK.classList.remove("d-shadow");
}

keyL.onmousedown = function(input){
    audio9.play();
    keyL.classList.add("d-shadow");
}
keyL.onmouseup = function(input){
    keyL.classList.remove("d-shadow");
}