import { settings } from "../Settings.js"

let myNpsApiKey = settings.npsKey
let parks = []                                                                  //create empty array to store fetched parks

export const getParks = () => {                                           //function to initially gather the park data from the nps api site
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${myNpsApiKey}&limit=500`, {  //gets a long string of park data
    method: "GET",
    headers: {
        "accept": "application/json",                                           //specificies the format I want
    }}) 
        .then(response => response.json())                                      //converts the data to correct notation
        .then(parsedResponse => {
            parks = parsedResponse.data                                         //put that formatted data in my variable
        }
        )
}

export const useParks = () => {                                                 //created a function to store a copy of the data and access it from another file.
    return parks.slice()
}
export const getParkDetail = (parkId) =>{
    let park = parks.find(park => parkId === park.id)
    const parkDetail = {
        id : park.id,
        type : "park",
        name : park.fullName,
        city : park.addresses[0].city,
        state : park.addresses[0].stateCode,
        description : park.description,
    }
    return parkDetail

}