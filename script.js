function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "percent"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   
	   
	   result = variable + sub + con + ifstate;
	   
  document.getElementById("grade").innerHTML = result;

return false; // required to not refresh the page; just leave this here
} //this ends the submit function


if (result == 0) {result2 = "I don't think you studied."};
if (result == 25) {result2 = "You need to spend more time. Try again."};
if (result == 50) {result2 = "I think you could do better. Try again."};
if (result == 75) {result2 = "So close. Try again."};
if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};
document.getElementById("grade2").innerHTML = result2; 

if (result == 0) {result2 = "I don't think you studied.<br /><img src='none.jpg' width='300' />"};
    if (result == 25) {result2 = "You need to spend more time. Try again.<br /><img src='poor.jpg' width='300' />"};
    if (result == 50) {result2 = "I think you could do better. Try again.<br /><img src='avg.jpg' width='300' />"};
    if (result == 75) {result2 = "So close. Try again.<br /><img src='above.jpg' width='300' />"};
    if (result == 100) {result2 = "You're a JavaScript pro!<br /><img src='excellent.jpg' width='300' />"};

 grading = [
	   {score:0,feedback:"I don't think you studied", image: "none.jpg"},
	   {score:25,feedback:"You need to spend more time. Try again", image: "poor.jpg"},
	   {score:50,feedback:"I think you could do better. Try again.", image: "avg.jpg"},
	   {score:75,feedback:"So close. Try again.", image: "above.jpg"},
	   {score:100,feedback:"Excellent! You're a JavaScript pro!", image: "excellent.jpg"}
	   ];
	  
for(i=0; i<grading.length; i++) {
    if(result == grading[i].score) {
    result2 = grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='300'  />";
	  }
	  }
