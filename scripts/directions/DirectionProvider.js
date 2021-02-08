import { settings } from '../Settings.js'

let directionData = {}
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


//==================================Coordinates====================================//
let coordinatesStr

export const useLocation = () => coordinatesStr.slice()

export const getLocation = (city,state) => {
                                      
    return fetch(`https://graphhopper.com/api/1/geocode?q=${city}+${state}&locale=us&debug=true&key=${settings.graphhopperKey}`, {
    method: "GET",
    }) 
        .then(response => response.json())                                      
        .then(parsedResponse => {
            const locationData = parsedResponse.hits[0].point
            coordinatesStr = `${locationData.lat},${locationData.lng}`
        })
}
