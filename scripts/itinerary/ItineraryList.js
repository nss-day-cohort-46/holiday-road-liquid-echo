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
    getItineraryByID(itineraryID)
})