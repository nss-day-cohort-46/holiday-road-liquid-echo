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