import { getParks, useParks } from "./ParkProvider.js";

let allParks = []

export const parkSelect = () => {
    return getParks()
    .then(() => {
        allParks = useParks()
        render(allParks) //build out the select element HTML
    })
}

const render = parksCollection => {
    const contentTarget = document.querySelector(".selections") // Get a reference to the DOM element where the <select> will be rendered
    contentTarget.innerHTML += `
        <div class="selections__parks">
            <select class="dropdown" id="parkSelect">
                <option value="0">Pick a park</option>
                ${
                    parksCollection.map(parkObject => { //build out each option element inside the select box
                        return `<option value="${parkObject.id}">${parkObject.fullName}</option>`
                    }).join("") //take out the commas in the HTML
                }
            </select>
        </div>
    `
}

const eventHub = document.querySelector("#container")
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelect") {
        const parkId = changeEvent.target.value
        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                id : parkId
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
