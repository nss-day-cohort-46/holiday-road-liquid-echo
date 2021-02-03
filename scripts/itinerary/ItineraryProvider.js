let itinerariesCollection = []

const useItineraries = () => [...itinerariesCollection]

export const getItineraries = () => {
    fetch("http://localhost:8088")
        .then( res => res.json() )
        .then( parsedRes => {
            itinerariesCollection = useItineraries()
        })
}