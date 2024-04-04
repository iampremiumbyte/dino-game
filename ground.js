import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty,
} from "./updateCustomProperty.js"

const SPEED = 0.05
const groundElems = document.querySelectorAll("[data-ground]");
const backgroundImageElem = document.querySelector("#background");

const grounds = [
  "/imgs/[forest] slow background.png",
  "/imgs/[forest] medium speed background.png",
  "/imgs/[forest] fast background.png",
  "/imgs/[desert] slow bg.png",
  "/imgs/[desert] fast bg.png"
];

const backgrounds = [
  "/imgs/[forest] static background.png",
  "/imgs/[desert] static bg.png"
]

const LEVEL1 = 300;
const LEVEL2 = 600;
const LEVEL3 = 900;
const LEVEL4 = 1200;



export function setupGround() {
  groundElems.forEach(ground => {
    ground.src = grounds[0];
  });
  backgroundImageElem.src = backgrounds[0]
  setCustomProperty(groundElems[0], "--left", 0)
  setCustomProperty(groundElems[1], "--left", 100)
}

export function updateGround(delta, speedScale, score) {
  groundElems.forEach(ground => {
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)

    if (getCustomProperty(ground, "--left") <= - 100) {
      if (score > LEVEL1) {
        ground.src = grounds[1];
        setTimeout(() => {
          backgroundImageElem.src = backgrounds[0]
        }, 500)
      }
      if (score > LEVEL2) {
        ground.src = grounds[2];
        setTimeout(() => {
          backgroundImageElem.src = backgrounds[0]
        }, 500)
      }
      if (score > LEVEL3) {
        ground.src = grounds[3];
        setTimeout(() => {
          backgroundImageElem.src = backgrounds[1]
        }, 500)
      }
      if (score > LEVEL4) {
        ground.src = grounds[4];
        setTimeout(() => {
          backgroundImageElem.src = backgrounds[1]
        }, 500)
      }
      incrementCustomProperty(ground, "--left", 200)
    }
  })
}
