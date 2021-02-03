let attractions = []

export const useAttractions = () => attractions.slice()

export const getAttractions = async () => {
    const res = await fetch("http://holidayroad.nss.team/bizarreries")
    const parsedresponse = await res.json()
    attractions = parsedresponse
    // Logging the attractions test code
    console.log(useAttractions())
}