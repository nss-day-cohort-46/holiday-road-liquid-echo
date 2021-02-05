import { settings } from '../Settings.js'

let directionData = {}
let locationData = {}
//Gets directions from point1 to point2 to point3
//Response should return an object with an array at object.paths.instructions which contains written instructions
//parameters need format (numberCommaNumber) no spaces. Ex: 36.1622296,-86.7743531
export const getDirections = (parkLatLong, eateryLatLong, attractionLatLong) => {                                           
    return fetch(`https://graphhopper.com/api/1/route?point=36.1622296,-86.7743531&point=${parkLatLong}&point=${eateryLatLong}&point=${attractionLatLong}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${settings.graphhopperKey}`, {
    method: "GET",
    }) 
        .then(response => response.json())                                      
        .then(parsedResponse => {
            directionData = parsedResponse
            //testCode
            console.log("written directions", useDirections())                                   
        }
        )
}

//makes a copy of the written instructions
export const useDirections = () => {
    let directionArray = []
    for(const key in directionData.paths["0"].instructions){
        directionArray.push(directionData.paths["0"].instructions[key].text)
    }
    return directionArray
}




//returns a search given a search parameter string (q)
//combine multiple words with a "+". Ex: nashville+tn instead of nashville tn
//the information is an object containing an array of hits. each hit is an object.  object.hits

const getLocation = (city,state) => {
                                      
    return fetch(`https://graphhopper.com/api/1/geocode?q=${city}+${state}&locale=us&debug=true&key=${settings.graphhopperKey}`, {
    method: "GET",
    }) 
        .then(response => response.json())                                      
        .then(parsedResponse => {
            locationData = parsedResponse.hits[0].point
        })
}
let coordsString
// export const useCoordinates = () => {
//     return coordsString
// }

export const getCoordinates = (city, state) => {
    return getLocation(city, state)
    .then( () => {
        coordsString = `${locationData.lat},${locationData.lng}`
        return coordsString
        console.log(coordsString)
    })
}