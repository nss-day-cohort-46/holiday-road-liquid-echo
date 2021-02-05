const eventHub = document.querySelector('#container')

export const Itinerary = itineraryObj => {
    const date = new Date(itineraryObj.date)
    return `
            <div class="itinerary">
                <h4>${date.toUTCString()}</h4>
                <p>${itineraryObj.parkName}</p>
                <p>${itineraryObj.eateryName}</p>
                <p>${itineraryObj.attractionName}</p>
                <button class="getDirections" id="directions--${itineraryObj.id}">Get Directions</button>
                <a href="twitter.com"><i class="fab fa-twitter-square fa-3x"></i></a>
            </div>
            `
}

eventHub.addEventListener("click", e => {
    if (e.target.classList.contains("getDirections")) {
        const itineraryID = e.target.id.split("--")[1]
        const customEvent = new CustomEvent("directionsRequested", {
            detail: {
                id: itineraryID
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})