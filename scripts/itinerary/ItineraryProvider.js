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
                console.log(itinerariesCollection)
            })
}
export const saveItinerary = itinerary => {
    debugger
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