
import { getParks } from "./parks/ParkProvider.js";
import { settings } from "./Settings.js";
import { getEateries } from './eateries/EateryProvider.js'

const allParkData = getParks (settings.npsKey)
console.log('allParkData: ', allParkData);

getEateries()

