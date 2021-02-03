let itinerariesCollection = []

export const useItineraries = () => [...itinerariesCollection]

export const getItineraries = () => {
    return fetch("http://localhost:8088/itineraries")
        .then( res => res.json() )
        .then( parsedRes => {
                itinerariesCollection = parsedRes
                console.log(itinerariesCollection)
            })
}