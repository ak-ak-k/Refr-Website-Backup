function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  // document.getElementById("bodytag").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("bodytag").style.overflow = "scroll";
}

// open close

function exploreBeta(params) {
  console.log("betaopen");
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("myDIV").style.display = "block";
}

function exploreBetaClose() {
  console.log("betaclose");
  document.getElementById("myDIV").style.display = "none";
}
