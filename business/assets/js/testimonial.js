
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
var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
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




