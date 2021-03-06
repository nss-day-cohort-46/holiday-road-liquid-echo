import { getAttractionDetail } from "../attractions/AttractionProvider.js"
import { getEateryDetail } from "../eateries/EateryProvider.js"
import { ItineraryList } from "../itinerary/ItineraryList.js"
import { saveItinerary } from "../itinerary/ItineraryProvider.js"
import { getParkDetail } from "../parks/ParkProvider.js"
import { Preview } from "./Preview.js"
import "../weather/WeatherList.js"

const parkTargetElement = document.querySelector(".preview__park")
const eateryTargetElement = document.querySelector(".preview__eatery")
const attractionTargetElement = document.querySelector(".preview__attraction")
const eventHub = document.querySelector("#container")
let parkHTML = ""
let attractionHTML = ""
let eateryHTML = ""
let eateryObj
let attractionObj
let parkObj


eventHub.addEventListener("parkSelected", event => {
    if (event.detail.id !==0) {
        parkObj = getParkDetail(event.detail.id)
        parkHTML = Preview(parkObj)
        render()
        saveButtonActive()
    }
})
eventHub.addEventListener("attractionSelected", event => {
    if (event.detail.id !==0) {
        attractionObj = getAttractionDetail(event.detail.id)
        attractionHTML = Preview(attractionObj)
        render()
        saveButtonActive()
    }
})
eventHub.addEventListener("eaterySelected", event => {
    if (event.detail.id !==0) {
        eateryObj = getEateryDetail(event.detail.id)
        eateryHTML = Preview(eateryObj)
        render()
        saveButtonActive()
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "saveItinerary"){
        const itinerary = {
                parkName: parkObj.name,
                parkID: parkObj.id,
                parkCity : parkObj.city.split(" ").join("+"),
                parkState : parkObj.state,
                eateryName: eateryObj.name,
                eateryID: eateryObj.id,
                eateryCity : eateryObj.city.split(" ").join("+"),
                eateryState : eateryObj.state,
                attractionName: attractionObj.name,
                attractionID: attractionObj.id,
                attractionCity : attractionObj.city.split(" ").join("+"),
                attractionState : attractionObj.state,
                date: new Date()
            }
        saveItinerary(itinerary).then(clearPreview).then(ItineraryList)
    }
})

const render = () => {
    parkTargetElement.innerHTML = `${parkHTML}`
    eateryTargetElement.innerHTML = `${eateryHTML}`
    attractionTargetElement.innerHTML = `${attractionHTML}`
}


// dispatch event for detail button
eventHub.addEventListener("click", e => {
    if (e.target.id === "parkDetailsButton") {
        const cE = new CustomEvent("detailsClicked", {
            detail: {
                item: parkObj
            }
        })
        eventHub.dispatchEvent(cE)
    }
    if (e.target.id === "attractionDetailsButton") {
        const cE = new CustomEvent("detailsClicked", {
            detail: {
                item: attractionObj
            }
        })
        eventHub.dispatchEvent(cE)
    }
    if (e.target.id === "eateryDetailsButton") {
        const cE = new CustomEvent("detailsClicked", {
            detail: {
                item: eateryObj
            }
        })
        eventHub.dispatchEvent(cE)
    }
})

const saveButtonActive = () => {
    if(parkObj && eateryObj && attractionObj){
        document.querySelector("#saveItinerary").disabled = false;
    }
}

const resetDivs = document.querySelectorAll(".reset")
const resetPage = () => {
    resetDivs.forEach(div => {
        div.innerHTML = ""
    })
}
const clearPreview = () => {
    parkHTML = ""
    eateryHTML = ""
    attractionHTML = ""
    parkObj = {}
    eateryObj = {}
    attractionObj = {}
    resetPage()
}