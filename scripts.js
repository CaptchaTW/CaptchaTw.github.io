
var modal = document.getElementById("my-modal");
var image = document.getElementById("AR-geospatial");
var span = document.getElementsByClassName("close")[0];
var AR_image_change = document.getElementById("AR-geospatial-modal");
var button_AR_change = document.getElementById("circle-click");
var button_AR_change1 = document.getElementById("circle-click1");
var email_logo = document.getElementById("email-logo");
var github_logo = document.getElementById("github-logo");

//email_logo.onclick= function(){
  //window.location.href = "mailto:yuchenmichaelchu@gmail.com?body=yourBody";
//}
button_AR_change1.onclick= function(){
  AR_image_change.src="Images/AR-milimeterwaves.jpg";
}
button_AR_change.onclick = function(){
  AR_image_change.src="Images/AR-geospatial.jpg";
}
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
