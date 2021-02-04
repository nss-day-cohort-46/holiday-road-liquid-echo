export const Itinerary = itineraryObj => {
    const date = new Date(itineraryObj.date)
    return `
            <div class="itinerary">
                <h4>${date.toUTCString()}</h4>
                <p>${itineraryObj.parkName}</p>
                <p>${itineraryObj.eateryName}</p>
                <p>${itineraryObj.attractionName}</p>
            </div>
            `
}