history.scrollRestoration = "manual";

jQuery(document).ready(function ($) {
  $(function () {
    $('[data-toggle="popover"]')
      .popover({
        container: "body",
        trigger: "focus",
        html: true,
        content: function () {
          var content = $(this).attr("data-popover-content");
          return $(content).children(".popover-body").html();
        },
      })
      .data("bs.popover")
      .addClass("my-super-popover");
  });

  $(function () {
    $(".infiniteslide#sliderbox1").infiniteslide({
      speed: 100,
      direction: "left",
      pauseonhover: false,
      responsive: true,
      clone: 6,
    });
    $(".infiniteslide#sliderbox2").infiniteslide({
      speed: 100,
      direction: "right",
      pauseonhover: false,
      responsive: true,
      clone: 6,
    });

    var clicked = false,
      base = 0;

    $(".infiniteslide#sliderbox1").on({
      mousemove: function (e) {
        clicked &&
          function (xAxis) {
            var _this = $(this);
            if (base > xAxis) {
              base = xAxis;
              _this.css("margin-left", "-=35px");
              _this.css("transition", "all 0.10s linear");
            }
            if (base < xAxis) {
              base = xAxis;
              _this.css("margin-left", "+=35px");
              _this.css("transition", "all 0.10s linear");
            }
          }.call($(this), e.pageX);
      },
      mousedown: function (e) {
        clicked = true;
        base = e.pageX;
      },
      mouseup: function (e) {
        clicked = false;
        base = 0;
      },
    });

    $(".infiniteslide#sliderbox2").on({
      mousemove: function (e) {
        clicked &&
          function (xAxis) {
            var _this = $(this);
            if (base > xAxis) {
              base = xAxis;
              _this.css("margin-left", "-=35px");
              _this.css("transition", "all 0.1s linear");
            }
            if (base < xAxis) {
              base = xAxis;
              _this.css("margin-left", "+=35px");
              _this.css("transition", "all 0.1s linear");
            }
          }.call($(this), e.pageX);
      },
      mousedown: function (e) {
        clicked = true;
        base = e.pageX;
      },
      mouseup: function (e) {
        clicked = false;
        base = 0;
      },
    });

    var vids = $("video");
    $.each(vids, function () {
      this.controls = false;
    });
    $(vids).autoplay;

    //Loop though all Video tags and set Controls as false

    var animation = bodymovin.loadAnimation({
      container: document.getElementById("vidbox"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./assets/js/data.json",
    });
  });

  $("a.menulinks").click(function () {
    // debugger;
    $(this).next("ul").toggle();
    // $(this).next("ul").addClass('d-flex')
    return false;

  });

  function step(startTime) {}

  const text = document.querySelectorAll(".content");
  const box = document.querySelectorAll(".work-img");
  const bgwarp = document.querySelector(".how-work");

  document.addEventListener("scroll", function () {
    // Array.from(text).forEach((el, idx) => {
    //   if (isOnScreen(el)) {
    //     box.forEach((el1, idx1) => {
    //       bgwarp.id = "an-banner" + idx;
    //       if (idx < 1) {
    //         if (idx == idx1) {
    //           el1.classList.add("show");
    //         } else {
    //           el1.classList.remove("show");
    //         }
    //       }
    //       if (idx > 1) {
    //         if (1 == idx1) {
    //           el1.classList.add("show");
    //         } else {
    //           el1.classList.remove("show");
    //         }
    //       }
    //     });
    //   }
    // });
  });
});
