import { eaterySelect } from "./eateries/EaterySelect.js";
import { attractionSelect } from './attractions/AttractionSelect.js';
import { parkSelect } from './parks/ParkSelect.js'
import { getAttractionDetail } from "./attractions/AttractionProvider.js";
import { getParkDetail, getParks } from "./parks/ParkProvider.js";
import { getEateryDetail } from "./eateries/EateryProvider.js"

parkSelect().then( () => {
    eaterySelect().then( () => {
        attractionSelect().then( () => {
            console.log(getParkDetail("77E0D7F0-1942-494A-ACE2-9004D2BDC59E"))
            console.log(getAttractionDetail("2"))
            console.log(getEateryDetail("2"))
        })
    })
})
