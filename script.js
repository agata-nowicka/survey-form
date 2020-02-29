//modal box
var modal = document.getElementById("myModal");

//button that opens the modal
var btn = document.getElementById("submit");

//<span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//open the modal
function alert() {
  modal.style.display = "block";
}

//clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


