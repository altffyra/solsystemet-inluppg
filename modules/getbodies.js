// ISOLERADE GET BODIES FÖR DEN KRÅNGLADE

import {divideData} from "../index.js"

async function bodiesData(APIKEY){
let response = await fetch('https://fathomless-shelf-54969.herokuapp.com/bodies', 
    {method: 'GET',
    headers: {'x-zocom': APIKEY }
})
let allPlanets = await response.json();
console.log(allPlanets);
divideData(allPlanets);
}

export {bodiesData};