
var modal = document.getElementById("my-modal");
var modal1 = document.getElementById("my-modal1");

var image = document.getElementById("AR-geospatial");
var image1 = document.getElementById("agent-commission");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

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
  button_AR_change.style.backgroundColor= "transparent";
  button_AR_change1.style.backgroundColor= "black";

}
button_AR_change.onclick = function(){
  AR_image_change.src="Images/AR-geospatial.jpg";
  button_AR_change1.style.backgroundColor= "transparent";
  button_AR_change.style.backgroundColor= "black";


}
image.onclick = function() {
  modal.style.display = "block";
}
image1.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}
