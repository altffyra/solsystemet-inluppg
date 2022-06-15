import { getAPIKey } from "./modules/getkey.js";
const planetElements = document.getElementById("planetElem");
const overlayElem = document.querySelector(".overlay");
const backBtn = document.querySelector(".planetpreview");
const planetNameElem = document.querySelector(".planetname");
const planetNameLatinElem = document.querySelector(".planetnamelatin");
const planetDescriptionElem = document.querySelector(".planetdescription");
const circumferenceElem = document.querySelector(".howbig");
const distanceElem = document.querySelector(".distance");
const maxtempElem = document.querySelector(".maxtemp");
const mintempElem = document.querySelector(".mintemp");
const moonElem = document.querySelector(".moon");

getAPIKey();

function divideData(allPlanets) {
  for (let i = 0; i < planetElements.children.length; i++) {
    planetElements.children[i].addEventListener("click", () => {
      planetNameElem.innerHTML = allPlanets[i].name;
      planetNameLatinElem.innerHTML = allPlanets[i].latinName;
      planetDescriptionElem.innerHTML = allPlanets[i].desc;
      let modifiednumberCurcimference =
        allPlanets[i].circumference.toLocaleString();
      circumferenceElem.innerHTML = modifiednumberCurcimference + " km";
      let modifiednumberDistance = allPlanets[i].distance.toLocaleString();
      distanceElem.innerHTML = modifiednumberDistance + " km";
      maxtempElem.innerHTML = allPlanets[i].temp.day + " C";
      mintempElem.innerHTML = allPlanets[i].temp.night + " C";
      moonElem.innerHTML = allPlanets[i].moons;
      overlayElem.classList.remove("hidden");
      let bgcolor = window.getComputedStyle(
        planetElements.children[i]
      ).backgroundColor;
      backBtn.style.backgroundColor = bgcolor;
    });
  }
}

backBtn.addEventListener("click", () => overlayElem.classList.add("hidden"));

export { divideData };
