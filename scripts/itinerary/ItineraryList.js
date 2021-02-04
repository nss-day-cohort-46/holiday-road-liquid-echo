import { Itinerary } from "./Itinerary.js"
import { getItineraries, useItineraries } from "./ItineraryProvider.js"

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