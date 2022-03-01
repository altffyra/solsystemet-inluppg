const planetElements = document.getElementById('planetElem')
import {getAPIKey} from "./modules/getkey.js";


getAPIKey()

function divideData(allPlanets){

    for (let i = 0; i < planetElements.children.length; i++) {
        planetElements.children[i].addEventListener('click', ()=> {
            console.log(planetElements.children[i])
            
        })
}
}


export {divideData}