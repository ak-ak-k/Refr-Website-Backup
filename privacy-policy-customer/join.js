let fileInput = document.getElementById("file-upload-input");
let fileSelect = document.getElementsByClassName("file-upload-select")[0];
fileSelect.onclick = function () {
  fileInput.click();
};
fileInput.onchange = function () {
  let filename = fileInput.files[0].name;
  let selectName = document.getElementsByClassName("file-select-name")[0];
  selectName.innerText = filename;
};

function myFunction(y) {
  var x = document.getElementById("myLinks");
  y.classList.toggle("change");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
