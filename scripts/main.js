import { parkSelect } from './parks/ParkSelect.js'
import { eaterySelect } from "./eateries/EaterySelect.js";



parkSelect()
eaterySelect()

const eventHub = document.querySelector("#container")
eventHub.addEventListener("eaterySelected", e =>{
    console.log(e.detail.id)
})
eventHub.addEventListener("parkSelected", e =>{
    console.log(e.detail.id)
})
