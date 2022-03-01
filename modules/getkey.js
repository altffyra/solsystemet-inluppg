// ANROP FÖR NYCKEL, ANVÄNDS BARA EN GÅNG
import { bodiesData } from "./getbodies.js";
const BASEURL = 'https://fathomless-shelf-54969.herokuapp.com/'

async function getAPIKey () {
    let response = await fetch(`${BASEURL}keys`,
    {method: 'POST'});
    let Data = await response.json();
    let jsonKey= Data.key
    bodiesData(jsonKey)
}

export {getAPIKey};