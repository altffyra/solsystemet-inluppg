// ISOLERADE GET BODIES FÖR DEN KRÅNGLADE

import { divideData } from "../index.js";

async function bodiesData(APIKEY) {
  let response = await fetch(
    "https://fathomless-shelf-54969.herokuapp.com/bodies",
    { method: "GET", headers: { "x-zocom": APIKEY } }
  );
  let data = await response.json();
  let allPlanets = data.bodies;
  divideData(allPlanets);
}

export { bodiesData };
