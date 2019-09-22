
var modal = document.getElementById("my-modal");
var modal1 = document.getElementById("my-modal1");
var modal2 = document.getElementById("my-modal2");
var modal3 = document.getElementById("my-modal3");



var image = document.getElementById("AR-geospatial");
var image1 = document.getElementById("agent-commission");
var image2 = document.getElementById("kutsu");
var image3 = document.getElementById("cute-okay");



var span = document.getElementById("closebutton");
var span1 = document.getElementById("closebutton1");
var span2 = document.getElementById("closebutton2");
var span3 = document.getElementById("closebutton3");


var AR_image_change = document.getElementById("AR-geospatial-modal");
var button_AR_change = document.getElementById("circle-click");
var button_AR_change1 = document.getElementById("circle-click1");
var AR_image_change1 = document.getElementById("kutsu-modal");
var button_AR_change2 = document.getElementById("circle-click2");
var button_AR_change3 = document.getElementById("circle-click3");
var AR_image_change2 = document.getElementById("cuteokay-modal");
var button_AR_change4 = document.getElementById("circle-click4");
var button_AR_change5 = document.getElementById("circle-click5");

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
button_AR_change3.onclick= function(){
  AR_image_change1.src="Images/kutsu-detail1.png";
  button_AR_change2.style.backgroundColor= "transparent";
  button_AR_change3.style.backgroundColor= "black";

}
button_AR_change2.onclick = function(){
  AR_image_change1.src="Images/kutsu-detail.png";
  button_AR_change3.style.backgroundColor= "transparent";
  button_AR_change2.style.backgroundColor= "black";
}
button_AR_change5.onclick= function(){
  AR_image_change2.src="Images/cute-okay-detail1.png";
  button_AR_change4.style.backgroundColor= "transparent";
  button_AR_change5.style.backgroundColor= "black";

}
button_AR_change4.onclick = function(){
  AR_image_change2.src="Images/cute-okay-detail.png";
  button_AR_change5.style.backgroundColor= "transparent";
  button_AR_change4.style.backgroundColor= "black";
}
image.onclick = function() {
  modal.style.display = "block";
}
image1.onclick = function() {
  modal1.style.display = "block";
}
image2.onclick = function() {
  modal2.style.display = "block";
}
image3.onclick = function() {
  modal3.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
