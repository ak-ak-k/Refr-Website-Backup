var spendImg = document.querySelector(".spendImg");

window.onload = () => {
  var test = document.querySelector(".spend_imgMain");
  // console.log("Load");
  // console.log(test);
  test.classList.add("psudo");
  setTimeout(() => {
    // console.log("Remove");
    test.classList.remove("psudo");
  }, 3000);
};

var counter_desk = document.querySelector("#counter");
var wrapper_header = document.querySelector(".wrapperContainer");

let x = spendImg.scrollHeight / 10;

let newValue = 0;
let totalHeight = 0;
let h = x / 1.8;

window.addEventListener("scroll", () => {
  totalHeight = document.scrollingElement.scrollHeight - window.innerHeight;
  // console.log(totalHeight);
  newValue = window.pageYOffset;
  // console.log(Math.floor(newValue / 100));

  if (Math.floor(newValue / 100) > h) {
    // console.log("got");
    spendImg.classList.add("psudo");
  } else if (Math.floor(newValue / 100) < h) {
    spendImg.classList.remove("psudo");
  }

  function counter_desk(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  if (Math.floor(newValue / 100) > 30) {
    return 0;
  } else if (Math.floor(newValue / 100) < 30) {
    counter_desk("counter", 2000, 2500, 100);
  }
});

// -----------------scrollTrigger----------------

//get app

ScrollTrigger.create({
  trigger: ".bottom_getapp_card",
  start: "10px bottom",
  end: "=+3900",
  // markers: true,
  toggleClass: "active",
  scrub: 2,
});

function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  return 0;
}
// counter("counter-sm", 2000, 2500, 100);

ScrollTrigger.create({
  trigger: ".mobile_creditCard",
  start: "center 80%",
  // markers: true,
  onEnter: () => counter("counter-sm", 2000, 2500, 100),
});

const heading = gsap.utils.toArray(".scene__header");
heading.forEach((scene__header, i) => {
  ScrollTrigger.create({
    trigger: scene__header,
    toggleClass: "active",
    start: "top 80%",
    end: "top -40%",
    // markers: true,
  });
});

const images = gsap.utils.toArray(".mobimg_sec3");
images.forEach((mobimg_sec3, i) => {
  ScrollTrigger.create({
    trigger: mobimg_sec3,
    toggleClass: "active",
    start: "top 80%",
    end: "top -40%",
    // markers: true,
  });
});

const cards = gsap.utils.toArray(".card_mobile");
cards.forEach((card_mobile, i) => {
  ScrollTrigger.create({
    trigger: card_mobile,
    toggleClass: "active",
    start: "top 90%",
    end: "top -50%",
    // markers: true,
  });
});

let category_icon = document.querySelector(".footer_cat span");

function categoryList() {
  let categoryList = document.querySelector(".categories_lists");
  let categoryListDesk = document.querySelector(".categories_lists_desk");
  categoryList.classList.toggle("active");
  categoryListDesk.classList.toggle("active");
}
