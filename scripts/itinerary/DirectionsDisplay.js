const targetElement = document.querySelector('#dialogContainer')
const eventHub = document.querySelector('#container')

export const ListDirections = (directions, currentItinerary) => {
    const listElements = directions.map(line => `<li class="directionLine">${line}</li>`).join("")
    const details = `
        <dialog open="open">
            <button id="closeDialog">x</button>
            <h2 class="directionsHeader">Directions for Itinerary #${currentItinerary.id}</h2>
            <ol class="directionsList">${listElements}</ol>
        </dialog>
    `
    render(details)
}

// add html to dialog box
const render = dialog => {
    targetElement.innerHTML = dialog
}

// close the dialox box on x button
eventHub.addEventListener("click", e => {
    if (e.target.id === "closeDialog") {
        const dialogBox = document.querySelector("dialog")
        dialogBox.close()
    }
})