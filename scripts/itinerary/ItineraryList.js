import { getDirections, getLocation, useLocation } from "../directions/DirectionProvider.js"
import { Itinerary } from "./Itinerary.js"
import { getItineraries, getItineraryByID, useItineraries } from "./ItineraryProvider.js"

const eventHub = document.querySelector('#container')

let arrayOfItineraries = []
const contentTarget = document.querySelector(".itineraries")

export const ItineraryList = () => {
    getItineraries()
    .then( () => {
        arrayOfItineraries = useItineraries()
        const itineraryHTML = `
        ${arrayOfItineraries.map(itineraryObj => Itinerary(itineraryObj)).join("")}
        `
        contentTarget.innerHTML = itineraryHTML
    })
}

eventHub.addEventListener("directionsRequested", e => {
    const itineraryID = parseInt(e.detail.id)
    const itinerary = getItineraryByID(itineraryID)
    const parkCity = itinerary.parkCity
    const parkState = itinerary.parkState
    const attractionCity = itinerary.attractionCity
    const attractionState = itinerary.attractionState
    const eateryCity = itinerary.eateryCity
    const eateryState = itinerary.eateryState
    

    let parkPromise = getLocation(parkCity,parkState)
    .then((coordStrng)=>{
        return coordStrng
    })
    let attractionPromise = getLocation(attractionCity,attractionState)
    .then((coordStrng)=>{
        return coordStrng
    })
    let eateryPromise = getLocation(eateryCity,eateryState)
    .then((coordStrng)=>{
        return coordStrng
    })

    Promise.all([parkPromise, eateryPromise, attractionPromise]).then((allCoords)=>{
        debugger
        getDirections(allCoords)
    })


  // Dear Lord, Help.
  alert(`Directions requested for itinerary number ${itineraryID}`)
    
    
})