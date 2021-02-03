import { getAttractions } from './attractions/AttractionProvider.js'
import { getEateries } from './eateries/EateryProvider.js'

getEateries()

getAttractions()
import { getParks, useParks } from "./parks/ParkProvider.js";
import { settings } from "./Settings.js";
import { getEateries } from './eateries/EateryProvider.js'
import { eaterySelect } from "./eateries/EaterySelect.js";

let allParks = []
getParks(settings.npsKey)
.then(() => {
    allParks = useParks()
    console.log('allParks: ', allParks);
})

getEateries()
eaterySelect()

const eventHub = document.querySelector("#container")
eventHub.addEventListener("eaterySelected", e =>{
    console.log(e.detail.id)
})