function card() {
  console.log("card 1 clicked");
  var x = document.getElementById("myDIV");
  var y = document.getElementById("myDIV2");
  var z = document.getElementById("triangles1");
  var z1 = document.getElementById("triangles2");

  // var y = document.getElementById("grad_line");
  // var z = document.getElementById("myDIV2");
  // // console.log("x style = " + x.style.display);
  // // console.log("y style = " + y.style.display);
  // // console.log("z style = " + z.style.display);
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  //   y.style.display = "block";
  //   z.style.display = "none";
  // }

  if (x.style.display === "none") {
    console.log("display none");
    y.style.display = "none";
    x.style.display = "block";
    z.style.display = "block";
    z1.style.display = "none";
  }
}

function card2() {
  console.log("card 2 clicked");
  var x = document.getElementById("myDIV2");
  var y = document.getElementById("myDIV");
  var z = document.getElementById("triangles1");
  var z1 = document.getElementById("triangles2");

  // var y = document.getElementById("grad_line2");
  // var z = document.getElementById("myDIV");
  // // console.log("x style = " + x.style.display);
  // // console.log("y style = " + y.style.display);
  // // console.log("z style = " + z.style.display);
  if (x.style.display === "none") {
    console.log("display none");
    y.style.display = "none";
    x.style.display = "block";

    z.style.display = "none";
    z1.style.display = "block";
  }
}

function myFunction(params) {
  var x = document.getElementById("myDIV2");
  var y = document.getElementById("grad_line2");
  x.style.display = "none";
  y.style.display = "none";
}
