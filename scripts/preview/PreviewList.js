const targetElement = document.querySelector(".preview")
eventHub = document.querySelector
let previewHTML =""
let
let
let

<button class="disabled" id="saveItinerary">Save Itinerary</button>

eventHub.addEventListener("parkSelected", event => {
    if (event.detail.id !==0) {
        let parkObj = getParkDetail(event.detail.id)
        parkHTML = Preview(parkObj)
        render()
    }
})
eventHub.addEventListener("attractionSelected", event => {
    if (event.detail.id !==0) {
        let attractionObj = getAttractionDetail(event.detail.id)
        attractionHTML = Preview(attractionObj)
        render()
    }
})
eventHub.addEventListener("eaterySelected", event => {
    if (event.detail.id !==0) {
        let eateryObj = getEateryDetail(event.detail.id)
        eateryHTML = Preview(eateryObj)
        render()
    }
})

const render = () => {
    targetElement.innerHTML = `
    ${parkHTML}
    ${forecastHTML}
    ${eateryHTML}
    ${attractionHTML}
    <article class="preview__forecast">
    <div class="weatherCard">
        <p>day1</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    <div class="weatherCard">
        <p>day2</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    <div class="weatherCard">
        <p>day3</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    <div class="weatherCard">
        <p>day4</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    <div class="weatherCard">
        <p>day5</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    </article>
    <article class="preview__eatery">
    <h3>Eatery Name</h3>
    <button class ="detailsButton" id="showEateryDetails" value="eateryId">details</button>
    </article>
    <article class="preview__attraction">
    <h3>Attraction Name</h3>
    <button class="detailsButton" id="showAttractionDetails" value="attractionId">details</button>
    </article>
    `
}

