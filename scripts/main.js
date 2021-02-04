import { eaterySelect } from "./eateries/EaterySelect.js";
import { attractionSelect } from './attractions/AttractionSelect.js';
import { parkSelect } from './parks/ParkSelect.js'
import './preview/PreviewList.js'
import { Weather } from "./weather/Weather.js";

parkSelect().then( () => {
    eaterySelect().then( () => {
        attractionSelect()
    })
})






















////////////////////////////////
const today = {
    name: "Tues",
    temp: 103,
    mainWeather: "cloudy",
}

console.log(Weather(today))
// Test Code Below
import { Preview } from './preview/Preview.js'
import { Itinerary } from "./itinerary/Itinerary.js";

let item = {
    id: 123,
    type: "park",
    name: "Very Pretty Park"
}

let park = Preview(item)

console.log(park)

let testItinerary = {
        parkName: "Pretty Park",
        parkID: 1,
        eateryName: "Hotdogplace",
        eateryID: 1,
        attractionName: "Hall of mirrors",
        attractionID: 1,
        date: new Date(),
        id: 1
    } 
    
console.log(Itinerary(testItinerary))
