export const Itinerary = itineraryObj => {
    return `
            <div class="itinerary">
                <h4>${itineraryObj.date.toUTCString()}</h4>
                <p>${itineraryObj.parkName}</p>
                <p>${itineraryObj.eateryName}</p>
                <p>${itineraryObj.attractionName}</p>
            </div>
            `
}