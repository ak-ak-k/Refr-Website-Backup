var x = window.matchMedia("(min-width: 700px)");
swiper(x);
x.addListener(swiper);

function swiper() {
  if (x.matches) {
    var swiper = new Swiper(".mySwiper1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 3,
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
    var swiper = new Swiper(".mySwiper1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
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
  }
}
