var catarr = [];

function changecat(cat) {
  catarr[0] = cat;
}

function saveGetDemo() {
  getVdemo();
  //$(':input[type="submit"]').prop('disabled', true);
  $("#submitGetDemo").prop("disabled", true);

  var first_name = $("#vFName").val();
  var last_name = $("#vLName").val();
  var phone = $("#Vmobile").val();
  var email = $("#vemailid").val();
  var name = first_name + " " + last_name;
  let new_ph = phone.length == 10 ? "+91" + phone : phone;

  if (!first_name || !last_name || !phone || !email || catarr.length == 0) {
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
      },
      (data) => {
        console.log("Data saved :" + data);
        $("#vFName").val("");
        $("#vLName").val("");
        $("#Vmobile").val("");
        $("#vemailid").val("");

        $("#submitGetDemo").prop("disabled", false);
      }
    );
  }
}

function getVdemo() {
  document.getElementById("error").innerHTML = "";

  let x1 = document.getElementById("vFName").value;
  let x2 = document.getElementById("vLName").value;
  let x3 = document.getElementById("vemailid").value;
  let x4 = document.getElementById("Vmobile").value;
  let x5 = catarr.length !== 0;

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
    }
  }

  /*
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (document.getElementById("vFName").value == undefined || document.getElementById("vFName").value == "") {
        document.getElementById("error").innerHTML = "Please enter the First Name.";
    }
    else if (document.getElementById("vLName").value == undefined || document.getElementById("vLName").value == "") {
        document.getElementById("error").innerHTML = "Please enter the Last Name.";
    }
    else if (document.getElementById("vemailid").value == undefined || document.getElementById("vemailid").value == "") {
        document.getElementById("error").innerHTML = "Please enter the E-Mail ID.";
    }
    else if (vemailid.value.match(mailformat) == null) {
        document.getElementById("error").innerHTML = "Please enter the Valid E-mail ID.";
    }
    else if (document.getElementById("Vmobile").value == undefined || document.getElementById("Vmobile").value == "") {
        document.getElementById("error").innerHTML = "Please enter the Mobile No.";
    }
    else if (parseFloat(document.getElementById("Vmobile").value).toString().length != 10) {
        document.getElementById("error").innerHTML = "Please enter the Valid Mobile No.";
    }
    else if (catarr.length <= 0) {
        document.getElementById("error").innerHTML = "Please Select the business Category.";
    }
    else {
        console.log("First Name = " + document.getElementById("vFName").value);
        console.log("last Name = " + document.getElementById("vLName").value);
        console.log("Email Id = " + document.getElementById("vemailid").value);
        console.log("Mobile No = " + document.getElementById("Vmobile").value);
        console.log("Category = " + catarr);
    }
    */
}
