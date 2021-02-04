import { eaterySelect } from "./eateries/EaterySelect.js";
import { attractionSelect } from './attractions/AttractionSelect.js';
import { parkSelect } from './parks/ParkSelect.js'

parkSelect().then( () => {
    eaterySelect().then( () => {
        attractionSelect()
    })
})

// Test Code Below
import { Preview } from './preview/Preview.js'

let item = {
    id: 123,
    type: "park",
    name: "Very Pretty Park"
}

let park = Preview(item)

console.log(park)