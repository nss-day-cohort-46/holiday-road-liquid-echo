import { settings } from '../Settings.js'

let directionData = {}
let locationData = {}
//Gets directions from point1 to point2 to point3
//Response should return an object with an array at object.paths.instructions which contains written instructions
//parameters need format (numberCommaNumber) no spaces. Ex: 36.1622296,-86.7743531
export const getDirections = (parkLatLong, eateryLatLong, attractionLatLong) => {                                           
    return fetch(`https://graphhopper.com/api/1/route?point=${parkLatLong}&point=${eateryLatLong}&point=${attractionLatLong}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${settings.graphhopperKey}`, {
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
    return directionData.paths.slice()
}




//returns a search given a search parameter string (q)
//combine multiple words with a "+". Ex: nashville+tn instead of nashville tn
//the information is an object containing an array of hits. each hit is an object.  object.hits

export const getLocation = (searchString) => {                                         
    return fetch(`https://graphhopper.com/api/1/geocode?q=${searchString}&locale=us&debug=true&key=${settings.graphhopperKey}`, {
    method: "GET",
    }) 
        .then(response => response.json())                                      
        .then(parsedResponse => {
            locationData = parsedResponse
            //testCode
            console.log("Location search results",useLocation())                                      
        }
        )
}

//makes a copy of the search results
export const useLocation = () => {
    return locationData.hits.slice()
}

