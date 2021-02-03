import { getParks, useParks } from "./parks/ParkProvider.js";

let allParks = []

export const parkSelect = () => {
    getParks(settings.npsKey)
    .then(() => {
        allParks = useParks()
        render(allParks) //build out the select element HTML
    })
}

const render = parksCollection => {
    const contentTarget = document.querySelector(".filters__crime") // Get a reference to the DOM element where the <select> will be rendered
    contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park...</option>
            ${
                parksCollection.map(parkObject => { //build out each option element inside the select box
                    return `<option value="${parkObject.id}">${parkObject.fullName}</option>`
                }).join("") //take out the commas in the HTML
            }
        </select>
    `
}

const eventHub = document.querySelector(".container") //define what the eventHub will be (needs to be the same across the application)

eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") { //crimeSelect is an ID on the select element for convictions
        const customEvent = new CustomEvent("crimeChosen", { //create a custome event. This is specific to choosing a crime from the dropdown menu
            detail: {
                crimeThatWasChosen: event.target.value //assigns the value specified in each option element to this variable crimeThatWasChosen
            }
        })
        eventHub.dispatchEvent(customEvent) //sends the crimeChosen custom event out to all my files in case they are listening
    }
})