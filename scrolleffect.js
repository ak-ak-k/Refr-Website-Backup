gsap.registerPlugin(ScrollTrigger);

// Scroll Scenes
const scenes = gsap.utils.toArray(".scene");

// maybe use dymanic height for pin/scroll ends?
const height = (scenes.length - 1) * 200 + "%";

// Scenes Timeline
const pinTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scenes__items",
    pin: ".scenes",
    start: "center center",
    end: `+=${height}`,
    // markers: true,
    // onEnterBack: () => startVideo(scenes[scenes.length - 1]),
    scrub: 1.8,
  },
});

// Set scenes wrapper to absolute
gsap.set(scenes, { position: "absolute", top: 0 });

// Loop over scenes
scenes.forEach(function (elem, i) {
  // Vid start / pause logic
  pinTl.add(
    () =>
      pinTl.scrollTrigger.direction > 0
        ? startVideo(elem, i)
        : stopVideo(elem, i),
    i + 0.001
  );

  if (i != 0) {
    // Scene Enter animations
    pinTl.from(
      elem.querySelector(".scene__figure"),
      {
        autoAlpha: 0,
      },
      i
    );

    pinTl.from(
      elem.querySelector(".scene__header"),
      {
        autoAlpha: 0,
        translateY: 100,
      },
      i
    );
  }

  // Scene Exit animations
  if (i != scenes.length - 1) {
    pinTl.to(
      elem.querySelector(".scene__header"),
      {
        autoAlpha: 0,
        translateY: -100,
      },
      i + 0.75
    );
    pinTl.to(
      elem.querySelector(".scene__figure"),
      {
        autoAlpha: 0,
      },
      i + 0.75
    );
  }

  // Vid start / pause logic
  pinTl.add(
    () =>
      pinTl.scrollTrigger.direction > 0
        ? stopVideo(elem, i)
        : startVideo(elem, i),
    i + 1.25
  );
});

// add a tiny amount of empty space at the end of the timeline so that the playhead trips the final callback in both directions
pinTl.to({}, { duration: 0.001 });

/**
 * Start Video
 * @param {HTML ELement} - element containing video
 */
function startVideo(vidScene, i) {
  const vid = vidScene.querySelector("video");
  // console.log("start", i);
  if (vid) {
    // console.log("Start Vid", vid);
    vid.play();
  }
}

/**
 * Stop Video
 * @param {HTML ELement} - element containing video
 */
function stopVideo(vidScene, i) {
  const vid = vidScene.querySelector("video");
  // console.log("stop", i);
  if (vid) {
    // console.log("end vid", vid)
    vid.pause();
  }
}

let width = window.innerWidth;

if (width < 768) {
  // console.log("check", width);
  var vid = document.getElementById("myVideo");
  var vid2 = document.getElementById("myVideo2");
  if (vid) {
    vid.play();
  }
  if (vid2) {
    vid2.play();
  }
}

ScrollTrigger.create({
  trigger: ".spend_imgMain",
  start: "20px center",
  // markers: true,
  toggleClass: "psudo",
  scrub: 2,
});
