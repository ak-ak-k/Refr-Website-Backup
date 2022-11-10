var acc = document.getElementsByClassName("faqs_ques");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// form

function myFunction() {
  document.getElementById("myDIV").style.display = "block";
}
function closeForm() {
  document.getElementById("myDIV").style.display = "none";
}
