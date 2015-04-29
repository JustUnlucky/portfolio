/**
* Created with Computer Science Projects.
* User: Unknown
* Date: 2015-04-28
* Time: 08:40 PM
* To change this template use Tools | Templates.
*/
var movementSpeed = 2;
 function leftArrowPressed() {
     var element = document.getElementById("image1");
     element.style.left = parseInt(element.style.left) - movementSpeed + 'px';
 }

 function rightArrowPressed() {
     var element = document.getElementById("image1");
     element.style.left = parseInt(element.style.left) + movementSpeed + 'px';
 }

 function upArrowPressed() {
     var element = document.getElementById("image1");
     element.style.top = parseInt(element.style.top) - movementSpeed + 'px';
 }

 function downArrowPressed() {
     var element = document.getElementById("image1");
     element.style.top = parseInt(element.style.top) + movementSpeed + 'px';
 }

 function moveSelection(evt) {
     if (evt.keyCode == 37) {
         leftArrowPressed();
     }
     if (evt.keyCode == 39) {
         rightArrowPressed();
     }
     if (evt.keyCode == 38) {
         upArrowPressed();
     }
     if (evt.keyCode == 40) {
         downArrowPressed();
     }

 }




 function docReady() {

     window.addEventListener('keydown', moveSelection);
 }

 function feedPlatypus() {
    var element = document.getElementById("image1");
     element.style.height = parseInt(element.style.height) + 2 + 'px';
document.getElementById("image1");
     element.style.width = parseInt(element.style.width) + 2 + 'px';
 }

function trainPlatypus() {
    movementSpeed++;
    console.log('Platypus gained speed!');
}

function newScenery(){
   var element = document.getElementById('image1');
   if (parseInt(element.style.left) >= 200){
       document.getElementById("background2").src = "http://images6.alphacoders.com/435/435617.jpg";
   }
}

var hunger = 100;
function hungerCounter(){
  if (hunger == 99) {
      alert('hi');
  }
}
window.requestAnimationFrame();
  hunger--;


var Platypus = {
  name: "Gustavo",
  age: 60,
  weight: 400,
  color: brown,
};