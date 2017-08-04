// Modal  : Gaganjeeth Reen

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var sec = document.getElementById("sec");

btn.onclick = function() {
    modal.style.display = "block";
    sec.style.filter = "blur(2px)";
}

span.onclick = function() {
    modal.style.display = "none";
    sec.style.filter = "blur(0px)";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        sec.style.filter = "blur(0px)";

    }
}


