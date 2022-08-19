var acc = document.getElementsByClassName("ques");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log;
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//

$(".primary_ques").click(function () {
  $(this).toggleClass("activeFilter").next(".filter-option-content").stop().slideToggle(500);
});
