let itinerariesCollection = []
const eventHub = document.querySelector("#container")
const dispatchStateChangeEvent = () => {
    const itinerariesStateChangedEvent = new CustomEvent("itinerariesStateChanged")

    eventHub.dispatchEvent(itinerariesStateChangedEvent)
}
export const useItineraries = () => [...itinerariesCollection]

export const getItineraries = () => {
    return fetch("http://localhost:8088/itineraries")
        .then( res => res.json() )
        .then( parsedRes => {
                itinerariesCollection = parsedRes
            })
}
export const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })

    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}


// use for get Itinerary by ID
export const getItineraryByID = itineraryID => {
    let itinerary = itinerariesCollection.find(itinerary => itineraryID === itinerary.id)
    // test line
    console.log(itinerary)
    // end test
    return itinerary
}

