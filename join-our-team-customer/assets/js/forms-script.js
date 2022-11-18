function saveGetDemo() {
  $("#submitGetDemo").prop("disabled", true);

  var first_name = $("#vFName").val();
  var last_name = $("#vLName").val();
  var phone = $("#vmoblie").val();
  var email = $("#vemail").val();
  // var link = $("#file-upload-input").val();
  var name = first_name + " " + last_name;
  let new_ph = (phone.length = 10 ? "+91" + phone : phone);

  if (!first_name || !last_name || !phone || !email) {
    $("#submitGetDemo").prop("disabled", false);
  } else {
    $.post(
      "https://app.refr.club/api/reminder/joinClient/IN",
      {
        //   name: "name",
        //   phone: "phone",
        //   email: "email",
        //   link: "https://link.tld",
        //   from: "VENDOR",

        name: name,
        phone: phone,
        email: email,
        link: "dummy link",
        from: "JOIN-CLIENT",
      },
      (data) => {
        let x = document.getElementById("snackbar2");
        x.className = "show";
        setTimeout(() => {
          x.className = x.className.replace("show", "");
        }, 3000);

        $("#vFName").val("");
        $("#vLName").val("");
        $("#vmoblie").val("");
        $("#vemail").val("");
        // $("#file-upload-input").val("");

        $("#submitGetDemo").prop("disabled", false);
      }
    );
  }
}

window.addEventListener("online", netStatus);
window.addEventListener("offline", netStatus);

function getVdemo() {
  if (navigator.onLine) {
    document.getElementById("error2").innerHTML = "";

    let x1 = document.getElementById("vFName").value;
    let x2 = document.getElementById("vLName").value;
    let x3 = document.getElementById("vmoblie").value;
    let x4 = document.getElementById("vemail").value;
    // let x5 = document.getElementById("file-upload-input").value;

    if (!x1 && !x2 && !x3 && !x4) {
      console.log(x1, x2, x3, x4);
      // NO SUBMIT
      document.getElementById("error2").innerHTML = "Please fill the form before submitting";
    } else {
      if (!x1 || !x2 || !x3 || !x4) {
        // SUBMIT NO VALUE
        document.getElementById("2").innerHTML = "Please enter valid value";
      } else {
        if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(x4) == false) {
          document.getElementById("error2").innerHTML = "Please enter the valid email id";
        } else if (x3 == NaN || x3.toString().length < 10) {
          document.getElementById("error2").innerHTML = "Please enter valid Mobile No.";
        } else {
          saveGetDemo();
        }
      }
    }
  } else {
    let x = document.getElementById("internet2");
    x.className = "show";
    x.className = x.className.replace("show", "");
    console.log("off");
  }
}
