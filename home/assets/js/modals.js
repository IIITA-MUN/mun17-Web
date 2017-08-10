// Modal  : Gaganjeeth Reen

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var sec = document.getElementById("sec");

var close = document.getElementById("closeBtn");

btn.onclick = function() {
    modal.style.display = "block";
    sec.style.filter = "blur(2px)";
}

span.onclick = function() {
    modal.style.display = "none";
    sec.style.filter = "blur(0px)";
}

close.onclick = function() {
	modal.style.display = "none";
  sec.style.filter = "blur(0px)";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        sec.style.filter = "blur(0px)";

    }
}

// Modal-1 : Ayushi Asthana

var modal1 = document.getElementById('myModal1');

var btn1 = document.getElementById("myBtn1");

var span1 = document.getElementsByClassName("close")[0];

var sec1 = document.getElementById("sec");

var close1 = document.getElementById("closeBtn1");

btn1.onclick = function() {
    modal1.style.display = "block";
    sec1.style.filter = "blur(2px)";
}

span1.onclick = function() {
    modal1.style.display = "none";
    sec1.style.filter = "blur(0px)";
}

close1.onclick = function() {
	modal1.style.display = "none";
	sec1.style.filter = "blur(0px)";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
        sec1.style.filter = "blur(0px)";

    }
}
