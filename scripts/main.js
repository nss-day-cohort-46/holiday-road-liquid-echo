import { eaterySelect } from "./eateries/EaterySelect.js";
import { attractionSelect } from './attractions/AttractionSelect.js';
import { parkSelect } from './parks/ParkSelect.js'
import { Weather } from "./weather/Weather.js";
import './preview/PreviewList.js'
import './preview/PreviewDetail.js'


parkSelect().then( () => {
    eaterySelect().then( () => {
        attractionSelect()
    })
})
