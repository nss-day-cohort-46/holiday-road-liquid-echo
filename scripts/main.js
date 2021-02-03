
import { getAttractions } from './attractions/AttractionProvider.js'

getAttractions()
import { getParks, useParks } from "./parks/ParkProvider.js";
import { settings } from "./Settings.js";
import { getEateries } from './eateries/EateryProvider.js'

import { getItineraries, useItineraries } from "./itinerary/ItineraryProvider.js";

import { eaterySelect } from "./eateries/EaterySelect.js";


let allParks = []
getParks(settings.npsKey)
.then(() => {
    allParks = useParks()
    console.log('allParks: ', allParks);
})

import { parkSelect } from './parks/ParkSelect.js'



parkSelect()
eaterySelect()


getItineraries()

const eventHub = document.querySelector("#container")
eventHub.addEventListener("eaterySelected", e =>{
    console.log(e.detail.id)
})

eventHub.addEventListener("parkSelected", e =>{
    console.log(e.detail.id)
})

