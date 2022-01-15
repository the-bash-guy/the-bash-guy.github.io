var audio = new Audio('noescape.mp3');
var boh;
var video = document.createElement("VIDEO");
alert("OPEN THE CONSOLE LOG WITH F12 IF YOU WANT. THERE'S AN EASTER EGG :-)");

const button = (element) => {
    element.hidden = true;
    element.disabled = true;
    var buttontwo = document.getElementById('noescape');
    buttontwo.style.display="block";
    var imagetwo = document.getElementById('imagetwo');
    imagetwo.style.display="block";
    var message = "NO ESCAPE NO ESCAPE NO ESCAPE";
    window.onbeforeunload = function(event) {
        var e = e || window.event;
        if (e) {
            e.returnValue = message;
        }
        return message;
    };
}

const imagehide = (element) => {
    element.hidden = true;
    element.disabled = true;
    var imagetwo = document.getElementById('imagetwo');
    imagetwo.style.display="none";
}

function initscare () {
    noescape();
    audio.play();
    setTimeout(() => creepy(), 8000);
}

function reinit () {
    noescape();
    audio.play();
    video.style.display = "none";
}

function noescape () {
    document.body.style.background = "#000000";
    console.log("NOESCAPE NOESCAPE NOESCAPE NOESCAPE")
    console.log("NO ESCAPE NO ESCAPE NO ESCAPE but sound is Solaris.exe");
    boh = setTimeout(() => mrsmajor(), 50)
}

function mrsmajor () {
    document.body.style.background = "url('mrsmajor.png')";
    console.log("NOESCAPE but there are mrsmajor images");
    boh = setTimeout(() => noescape(), 50)
}

function creepy () {
    clearTimeout(boh);
    audio.pause();
    document.body.style.background = "#000000";
        if (video.canPlayType("video/mp4")) {
            video.setAttribute("src","creepy.mp4");
        } else {
            video.setAttribute("src","creepy.mp3");
        }
  
      video.setAttribute("autoplay", "");
      video.setAttribute("style", "position: absolute; z-index: -1; top: 0; left: 0; widht: 100%; height: 100%; object-fit: cover;");
    document.body.appendChild(video);
    setTimeout(() => reinit(), 42000);
}