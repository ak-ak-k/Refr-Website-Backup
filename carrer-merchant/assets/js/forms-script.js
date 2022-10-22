function saveGetDemo() {
  getVdemo();

  $("#submitGetDemo").prop("disabled", true);

  var first_name = $("#vfname").val();
  var last_name = $("#vlname").val();
  var phone = $("#vphone").val();
  var email = $("#vemail").val();
  var link = $("#file-upload-input").val();
  var name = first_name + " " + last_name;
  let new_ph = (phone.length = 10 ? "+91" + phone : phone);

  if (!first_name || !last_name || !phone || !email || !link) {
    $("#submitGetDemo").prop("disabled", false);
  } else {
    $.post(
      "https://app.refr.club/api/reminder/joinVendor/IN",
      {
        name: name,
        phone: phone,
        email: email,
        link: link,
        from: "VENDOR",
      },
      (data) => {
        console.log("Data saved :" + data);
        $("#vfname").val("");
        $("#vlname").val("");
        $("#vphone").val("");
        $("#vemail").val("");
        $("#file-upload-input").val("");

        $("#submitGetDemo").prop("disabled", false);
      }
    );
  }
}

function getVdemo() {
  document.getElementById("error").innerHTML = "";

  let x1 = document.getElementById("vfname").value;
  let x2 = document.getElementById("vlname").value;
  let x3 = document.getElementById("vphone").value;
  let x4 = document.getElementById("vemail").value;
  let x5 = document.getElementById("file-upload-input").value;

  if (!x1 && !x2 && !x3 && !x4 && !x5) {
    console.log(x1, x2, x3, x4, x5);
    // NO SUBMIT
    document.getElementById("error").innerHTML = "Please fill the form before submitting";
  } else {
    if (!x1 || !x2 || !x3 || !x4 || !x5) {
      // SUBMIT NO VALUE
      document.getElementById("error").innerHTML = "Please enter valid value";
    } else {
      var mailformat = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

      if (x3.match(mailformat)) {
        document.getElementById("error").innerHTML = "Please enter the valid email id";
      }
      var phoneformat = "/^[0-9A-Za-z@]+$";
      if (x4.match(phoneformat)) {
        document.getElementById("error").innerHTML = "Please enter valid Mobile No.";
      }
    }
  }
}
