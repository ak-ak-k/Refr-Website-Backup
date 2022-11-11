function SaveexploreData() {
  validatedata();
  $("#submitGetDemo").prop("disabled", true);

  var FullName = $("#FullName").val();
  var phone = $("#Contact_no").val();
  var email = $("#mailId").val();
  var location = $("#Locations").val();
  let phone1 = phone.length == 10 ? "+91" + phone : phone;
  let pincode = $("#pincode").val();
  // console.log("Full name = " + FullName);
  // console.log("Phone name = " + phone);
  // console.log("mail name = " + email);
  // console.log("location name = " + location);
  // console.log("pincode name = " + pincode);
  if (!FullName || !phone1 || !email || !location || !pincode) {
    $("#submitGetAccess").prop("disabled", false);
  } else {
    console.log("Full name = " + FullName);
    console.log("Phone name = " + phone);
    console.log("mail name = " + email);
    console.log("location name = " + location);
    console.log("pincode name = " + pincode);
    console.log("type of" + typeof pincode);
    $.post(
      "https://app.refr.club/api/reminder/exploreBeta/IN",
      {
        name: FullName,
        phone: phone,
        email: email,
        pincode: parseInt(pincode),
        state: location,
        from: "EXPLORE-BETA",
      },
      (data) => {
        $("#FullName").val("");
        $("#Contact_no").val("");
        $("#mailId").val("");
        $("#Locations").val("");
        $("#pincode").val("");

        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(() => {
          x.className = x.className.replace("show", "");
        }, 3000);

        $("#submitGetAccess").prop("disabled", false);
      }
    );
  }
}

function validatedata() {
  if (navigator.onLine) {
    document.getElementById("error").innerHTML = "";
    let x1 = document.getElementById("FullName").value;
    let x2 = document.getElementById("pincode").value;
    let x3 = document.getElementById("mailId").value;
    let x4 = document.getElementById("Contact_no").value;
    let x5 = document.getElementById("Locations").value;

    if (!x1 && !x2 && !x3 && !x4 && !x5) {
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
        if (x2.length != 6) {
          document.getElementById("error").innerHTML = "Please enter valid Pincode No.";
        }
      }
    }
  } else {
    let x = document.getElementById("internet");
    x.className = "show";
    x.className = x.className.replace("show", "");
    console.log("off");
  }
}
