function card() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("grad_line");
  var z = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
  }
}

function card2() {
  var x = document.getElementById("myDIV2");
  var y = document.getElementById("grad_line2");
  var z = document.getElementById("myDIV");

  if (x.style.display === "none") {
    z.style.display = "none";
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}

function myFunction(params) {
  var x = document.getElementById("myDIV2");
  var y = document.getElementById("grad_line2");
  x.style.display = "none";
  y.style.display = "none";
}
