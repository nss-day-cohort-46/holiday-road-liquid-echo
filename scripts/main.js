import { getParks, useParks } from "./parks/ParkProvider.js";
import { settings } from "./Settings.js";

let allParks = []
getParks(settings.npsKey)
.then(() => {
    allParks = useParks()
    console.log('allParks: ', allParks);
})

