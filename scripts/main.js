import { getParks } from "./parks/ParkProvider.js";
import { settings } from "./Settings.js";

const allParkData = getParks (settings.npsKey)
console.log('allParkData: ', allParkData);

