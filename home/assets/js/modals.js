var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the container section 
var sec = document.getElementById("sec");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    sec.style.filter = "blur(2px)";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    sec.style.filter = "blur(0px)";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        sec.style.filter = "blur(0px)";

    }
}