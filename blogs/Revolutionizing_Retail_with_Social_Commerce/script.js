function myFunction(y) {
  var x = document.getElementById("myLinks");
  y.classList.toggle("change");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
