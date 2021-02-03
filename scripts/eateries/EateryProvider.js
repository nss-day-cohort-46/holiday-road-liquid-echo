let eateriesCollection = []

export const useEateries = () => [...eateriesCollection]

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then( res => res.json())
        .then( parsedresponse => {
            eateriesCollection = parsedresponse
// TEST CODE to make sure we're getting usable data 
            console.log(useEateries()[0])
        })
}
