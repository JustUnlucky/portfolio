/**
* Created with Computer Science Projects.
* User: Unknown
* Date: 2015-04-28
* Time: 05:24 PM
* To change this template use Tools | Templates.
*/
var button = document.getElementById("submitButton");

button.addEventListener("click", function() {
if  (document.getElementById("dropdown").value == "+"){
    var input1 = document.getElementById('input1').value;

    var input2 = document.getElementById('input2').value;

    var answer = parseInt(input1) + parseInt(input2);

    document.getElementById('display').innerHTML = answer;

    } else if  (document.getElementById("dropdown").value == "-"){
    var input1 = document.getElementById('input1').value;

    var input2 = document.getElementById('input2').value;

    var answer = parseInt(input1) - parseInt(input2);

    document.getElementById('display').innerHTML = answer;

    } else if(document.getElementById("dropdown").value == "x") {
    var input1 = document.getElementById('input1').value;

    var input2 = document.getElementById('input2').value;

    var answer = parseInt(input1) * parseInt(input2);

    document.getElementById('display').innerHTML = answer;
    } else if  (document.getElementById("dropdown").value == "/"){
    var input1 = document.getElementById('input1').value;

    var input2 = document.getElementById('input2').value;

    var answer = parseInt(input1) / parseInt(input2);

    document.getElementById('display').innerHTML = answer;
} else if  (document.getElementById("dropdown").value == "^"){
    var input1 = document.getElementById('input1').value;

    var input2 = document.getElementById('input2').value;

    var answer = Math.pow (parseInt(input1), parseInt(input2));

    document.getElementById('display').innerHTML = answer;
}
}, true);
function Clear() {
           document.getElementById('input1').value = " ";
           document.getElementById('input2').value = " ";
           document.getElementById('display').innerHTML = " ";

       }