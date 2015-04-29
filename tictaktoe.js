/**
* Created with Computer Science Projects.
* User: Unknown
* Date: 2015-04-28
* Time: 07:03 PM
* To change this template use Tools | Templates.
*/
var debug = document.getElementById("debug");
var roundNum = 1;  // need to make sure roundNum increases somewhere

var spot0 = document.getElementById("spot0");
spot0.addEventListener("click", doTheStuff);

var spot1 = document.getElementById("spot1");
spot1.addEventListener("click", doTheStuff);

var spot2 = document.getElementById("spot2");
spot2.addEventListener("click", doTheStuff);

var spot3 = document.getElementById("spot3");
spot3.addEventListener("click", doTheStuff);

var spot4 = document.getElementById("spot4");
spot4.addEventListener("click", doTheStuff);

var spot5 = document.getElementById("spot5");
spot5.addEventListener("click", doTheStuff);

var spot6 = document.getElementById("spot6");
spot6.addEventListener("click", doTheStuff);

var spot7 = document.getElementById("spot7");
spot7.addEventListener("click", doTheStuff);

var spot8 = document.getElementById("spot8");
spot8.addEventListener("click", doTheStuff);


function doTheStuff(e){

    addSign(this);
    if(checkForWin()){
        alert("You won!");
    }
}

// spot = the element that was clicked.  YOu need to add an X or an O depending on the round.
function addSign(spot){
    debug.innerHTML = spot;
    
    if(roundNum%2 === 0){
       spot.innerHTML = " O ";
       roundNum++;
        
    }
       
    else{
        spot.innerHTML = " X ";
        roundNum++;
    }
               
}

//  This function needs to check to see if there is a 3 in a row. OR if there is a draw. Return True if there is a win.  False if there is not.
function checkForWin(){
    var row1 = spot0.innerHTML + spot1.innerHTML + spot2.innerHTML;
    var row2 = spot3.innerHTML + spot4.innerHTML + spot5.innerHTML;
    var row3 = spot6.innerHTML + spot7.innerHTML + spot8.innerHTML;
    var col1 = spot0.innerHTML + spot3.innerHTML + spot6.innerHTML;
    var col2 = spot1.innerHTML + spot4.innerHTML + spot7.innerHTML;
    var col3 = spot2.innerHTML + spot5.innerHTML + spot8.innerHTML;
    var diag1 = spot0.innerHTML + spot4.innerHTML + spot8.innerHTML;
    var diag2 = spot2.innerHTML + spot4.innerHTML + spot6.innerHTML;
    debug.innerHTML = col3.length;
    
    if(spot0.innerHTML === spot1.innerHTML && spot2.innerHTML === spot1.innerHTML && row1.length === 9){
        return true;
    }
    
    else if(spot3.innerHTML === spot4.innerHTML && spot4.innerHTML === spot5.innerHTML && row2.length === 9){
        return true;
    }
        else if(spot6.innerHTML === spot7.innerHTML && spot7.innerHTML === spot8.innerHTML && row3.length === 9){
        return true;
    }
    
     else if(spot0.innerHTML === spot3.innerHTML && spot3.innerHTML === spot6.innerHTML && col1.length === 9){
        return true;
    }
    
    else if(spot1.innerHTML === spot4.innerHTML && spot4.innerHTML === spot7.innerHTML && col2.length === 9){
        return true;
    }
     
      else if(spot2.innerHTML === spot5.innerHTML && spot5.innerHTML === spot8.innerHTML && col3.length === 9){
        return true;
    }
   
    else if(spot0.innerHTML === spot4.innerHTML && spot4.innerHTML === spot8.innerHTML && diag1.length ===9){
        return true;
    }
    
     else if(spot2.innerHTML === spot4.innerHTML && spot4.innerHTML === spot6.innerHTML && diag2.length ===9){
        return true;
    }
    else{
        return false;
    }
}