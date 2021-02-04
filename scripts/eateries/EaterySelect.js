import { getEateries, useEateries } from "./EateryProvider.js"



const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".selections")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "eaterySelect") {
        const eateryId = changeEvent.target.value
        const customEvent = new CustomEvent("eaterySelected", {
            detail: {
                id : eateryId
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const eaterySelect = () => {
    return getEateries()
    .then( () => {
      const eateries = useEateries()
      render(eateries)
    })
}

const render = eateries => {
    contentTarget.innerHTML += `
        <div class="selections__eateries">
            <label for="eaterySelect">Choose an eatery</label>
            <select class="dropdown" id="eaterySelect">
                <option value="0">Select an Eatery</option>
                ${eateries.map(eatery => `<option value="${eatery.id}">${eatery.businessName}</option>`)}
            </select>
        </div>
    `
}