
var modal = document.getElementById("my-modal");
var image = document.getElementById("AR-geospatial");
var span = document.getElementsByClassName("close")[0];
image.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}