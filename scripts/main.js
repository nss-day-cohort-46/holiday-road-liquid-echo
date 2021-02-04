import { eaterySelect } from "./eateries/EaterySelect.js";
import { attractionSelect } from './attractions/AttractionSelect.js';
import { parkSelect } from './parks/ParkSelect.js'
import { Weather } from "./weather/Weather.js";
import './preview/PreviewList.js'
import './preview/PreviewDetail.js'
import { ItineraryList } from "./itinerary/ItineraryList.js";


parkSelect().then( () => {
    eaterySelect().then( () => {
        attractionSelect()
    })
})

ItineraryList()

// TEST CODE
import { getWeather } from "./weather/WeatherProvider.js";
import {getParks} from './parks/ParkProvider.js'

getParks().then( () => getWeather("77E0D7F0-1942-494A-ACE2-9004D2BDC59E"))
