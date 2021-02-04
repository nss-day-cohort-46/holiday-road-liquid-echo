let attractions = []

export const useAttractions = () => attractions.slice()

export const getAttractions = async () => {
    const res = await fetch("http://holidayroad.nss.team/bizarreries")
    const parsedresponse = await res.json()
    attractions = parsedresponse
}
export const getAttractionDetail = (attractionId) =>{
    let attraction = attractions.find(attraction => parseInt(attractionId) === attraction.id)
    const attractionDetail = {
        id : attraction.id,
        type : "attraction",
        name : attraction.name,
        city : attraction.city,
        state : attraction.state,
        description : attraction.description,
    }
    return attractionDetail

}