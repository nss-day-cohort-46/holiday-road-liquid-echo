import { getAttractions, useAttractions } from "./AttractionProvider.js"

const targetElement = document.querySelector('.selections')
const eventHub = document.querySelector('#container')

export const attractionSelect = () => {
    return getAttractions()
        .then( () => {
            const attractions = useAttractions()
            targetElement.innerHTML += render(attractions)
        })
}

const render = attractions => {
    return ` <div class="selections__attractions">
                <select class="dropdown" id="attractionSelect">
                    <option value="0">Pick an attraction</option>
                    ${attractions.map(attraction => {
                        return `<option value="${attraction.id}">${attraction.name}</option>`
                    }).join("")}
                </select>
            </div>`
}

eventHub.addEventListener("change", e => {
    if (e.target.id === "attractionSelect") {
        const customEvent = new CustomEvent("attractionSelected", {
            detail: {
                id: e.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)      
    }
})