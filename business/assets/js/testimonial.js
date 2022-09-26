
var catarr = [];
// testimoninals
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
console.log("width = " + width);
changeswiper();
// swiper
// var swiper = new Swiper(".mySwiper1", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination1",
//     clickable: true,
//   },
// });

addEventListener("resize", (event) => {
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  changeswiper();
});

function changeswiper() {
  if (width <= 700) {
    new Swiper(".mySwiper1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "1",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
    });
  } else {
    new Swiper(".mySwiper1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: "3",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
    });
  }
}

function changecat(cat) {
  catarr[0]= cat;
}

function getVdemo() {
  document.getElementById("error").innerHTML = "";
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
  else if (document.getElementById("Vmobile").value == undefined || document.getElementById("vemailid").value == "") {
    document.getElementById("error").innerHTML = "Please enter the Mobile No.";
  }
  else if (parseFloat(document.getElementById("Vmobile").value).toString().length != 10) {
    document.getElementById("error").innerHTML = "Please enter the Valid Mobile No.";
  }
  else if(catarr.length <= 0 ){
    document.getElementById("error").innerHTML = "Please Select the business Category.";
  }
  else {
    console.log("First Name = " + document.getElementById("vFName").value);
    console.log("last Name = " + document.getElementById("vLName").value);
    console.log("Email Id = " + document.getElementById("vemailid").value);
    console.log("Mobile No = " + document.getElementById("Vmobile").value);
    console.log("Category = " + catarr);
  }
}
