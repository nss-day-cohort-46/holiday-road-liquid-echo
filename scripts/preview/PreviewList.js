import { getAttractionDetail } from "../attractions/AttractionProvider.js"
import { getEateryDetail } from "../eateries/EateryProvider.js"
import { saveItinerary } from "../itinerary/ItineraryProvider.js"
import { getParkDetail } from "../parks/ParkProvider.js"
import { Preview } from "./Preview.js"

const targetElement = document.querySelector(".preview")
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
                eateryName: eateryObj.name,
                eateryID: eateryObj.id,
                attractionName: attractionObj.name,
                attractionID: attractionObj.id,
                date: new Date()
            }
            debugger
        saveItinerary(itinerary).then(clearPreview)
    }
})

const render = () => {
    targetElement.innerHTML = `
    ${parkHTML}
    ${eateryHTML}
    ${attractionHTML}
    <button class="disabled" id="saveItinerary">Save Itinerary</button>
    `
}

const saveButtonActive = () => {
    if(parkObj && eateryObj && attractionObj){
        document.querySelector("#saveItinerary").classList.remove("disabled")
    }
}

const clearPreview = () => {
    parkObj = {}
    eateryObj = {}
    attractionObj = {}
    Preview(parkObj)
    Preview(eateryObj)
    Preview(attractionObj)
}


    // ${forecastHTML}
    // <article class="preview__forecast">
    // <div class="weatherCard">
    //     <p>day1</p>
    //     <p>temp</p>
    //     <p>forecast</p>
    // </div>
    // <div class="weatherCard">
    //     <p>day2</p>
    //     <p>temp</p>
    //     <p>forecast</p>
    // </div>
    // <div class="weatherCard">
    //     <p>day3</p>
    //     <p>temp</p>
    //     <p>forecast</p>
    // </div>
    // <div class="weatherCard">
    //     <p>day4</p>
    //     <p>temp</p>
    //     <p>forecast</p>
    // </div>
    // <div class="weatherCard">
    //     <p>day5</p>
    //     <p>temp</p>
    //     <p>forecast</p>
    // </div>
    // </article>
