function myFunction(y) {
  console.log(5);

  var x = document.getElementById("myLinks");
  y.classList.toggle("change");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var catarr = [];
var prebtn;

const error_b = document.getElementById("error_border");

function saveGetDemo() {
  $("#submitGetDemo").prop("disabled", true);
  var email = $("#vemailid").val();
  if (!email || catarr.length == 0) {
    $("#submitGetDemo").prop("disabled", false);
  } else {
    //$('input[type="submit"]').attr('disabled','disabled');

    $.post(
      "https://app.refr.club/api/reminder/vendor/IN",
      {
        name: name,
        email: email,
        phone: new_ph,
        type: catarr,
        from: "VENDOR",
      },
      (data) => {
        let x = document.getElementById("error_border");
        x.className = "show";
        setTimeout(() => {
          x.className = x.className.replace("show", "");
        }, 3000);

        $("#vemailid").val("");
        $("#submitGetDemo").prop("disabled", false);
      }
    );
  }
}

function getVdemo() {
  if (navigator.onLine) {
    // internet connection on

    let message = [];
    let x3 = document.getElementById("vemailid").value;
    console.log("error x3");
    message.push(error_b);
    let a = (error_b.style.border = "1px solid red");
    let b = (error_b.style.borderRadius = "8px");
    let c = a + b;

    c.innerText = message.join(", ");

    if (!x3.length > 0) {
      // SUBMIT NO VALUE

      message.push(error_b);
      let a = (error_b.style.border = "1px solid red");
      let b = (error_b.style.borderRadius = "3px");
      let c = a + b;

      c.innerText = message.join(", ");
      document.getElementById("error").innerHTML = "Please enter valid value";
      console.log("error x33");
    } else {
      if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(x3) == false) {
        document.getElementById("error").innerHTML = "Please enter the valid email id";
        console.log("error x333");
      } else {
        console.log("done", x3);
        saveGetDemo();
      }
    }
  } else {
    let x = document.getElementById("internet");
    x.className = "show";
    x.className = x.className.replace("show", "");
    console.log("off");
  }
}

// ----------------------------------------------

var btn = document.getElementById("webshareapi");

btn.addEventListener("click", function () {
  navigator.share({
    url: document.URL,
    title: document.title,
    text: "lorem ipsum...",
  });
});
