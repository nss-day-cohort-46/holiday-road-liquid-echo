import { eaterySelect } from "./eateries/EaterySelect.js";
import { attractionSelect } from './attractions/AttractionSelect.js';
import { parkSelect } from './parks/ParkSelect.js'
import './preview/PreviewList.js'
import './preview/PreviewDetail.js'
import { ItineraryList } from "./itinerary/ItineraryList.js";
import './itinerary/SaveItinerary.js'
import { getDirections, getLocation } from "./directions/DirectionProvider.js";


parkSelect()
    .then(eaterySelect)
    .then(attractionSelect)
    .then(ItineraryList)


// TEST CODE
const nashville = "36.1622296,-86.7743531"
const park = "37.84054795,-119.8861004"

const nashvilleSearch = "nashville+tn"

getDirections(nashville, park, nashville)

getLocation(nashvilleSearch)