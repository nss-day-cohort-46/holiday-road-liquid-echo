export const Itinerary = itineraryObj => {
    const date = new Date(itineraryObj.date)
    return `
            <div class="itinerary">
                <h4>${date.toUTCString()}</h4>
                <p>${itineraryObj.parkName}</p>
                <p>${itineraryObj.eateryName}</p>
                <p>${itineraryObj.attractionName}</p>
                <a href="twitter.com"><i class="fab fa-twitter-square fa-3x"></i></a>
            </div>
            `
}