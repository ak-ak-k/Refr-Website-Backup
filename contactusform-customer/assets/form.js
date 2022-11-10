// popup form

function myFunction1() {
  console.log(8);
  document.getElementById("mySidebar").style.width = "0";

  document.getElementById("myDIV").style.display = "block";
}
function closeForm() {
  console.log("close from clicks");
  document.getElementById("myDIV").style.display = "none";
}
