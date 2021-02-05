let eateriesCollection = []

export const useEateries = () => [...eateriesCollection]

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then( res => res.json())
        .then( parsedresponse => {
            eateriesCollection = parsedresponse
        })
}
export const getEateryDetail = (eateryId) =>{
    let eatery = eateriesCollection.find(eatery => parseInt(eateryId) === eatery.id)
    const eateryDetail = {
        id : eatery.id,
        type : "eatery",
        name : eatery.businessName,
        city : eatery.city,
        state : eatery.state,
        description : eatery.description,
        wifi : eatery.ameneties.wifi
    }
    return eateryDetail
}