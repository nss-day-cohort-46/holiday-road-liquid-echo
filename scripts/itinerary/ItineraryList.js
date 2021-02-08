import { getDirections, getLocation, useDirections } from "../directions/DirectionProvider.js"
import { Itinerary } from "./Itinerary.js"
import { getItineraries, getItineraryByID, useItineraries } from "./ItineraryProvider.js"
import { ListDirections } from './DirectionsDisplay.js'

const eventHub = document.querySelector('#container')
const dialogBox = document.querySelector('#dialogContainer')

let arrayOfItineraries = []
let currentItinerary
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
    currentItinerary = getItineraryByID(itineraryID)
    const parkCity = currentItinerary.parkCity
    const parkState = currentItinerary.parkState
    const attractionCity = currentItinerary.attractionCity
    const attractionState = currentItinerary.attractionState
    const eateryCity = currentItinerary.eateryCity
    const eateryState = currentItinerary.eateryState
    

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
        getDirections(allCoords).then(() => {
            ListDirections(useDirections(), currentItinerary)
        })
        .catch(error => {
            alert("directions not Available")
        }) 
    })
})
