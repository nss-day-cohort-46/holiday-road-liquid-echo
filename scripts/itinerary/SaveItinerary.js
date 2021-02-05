const eventHub = document.querySelector("#container")
const targetElement = document.querySelector('#dialogContainer')

eventHub.addEventListener("itinerariesStateChanged", event => {
    itinerarySavedMessage()
})

let savedMessage = ""

const itinerarySavedMessage = () => {
    savedMessage = `
        <dialog open="open">
            <h3>Itinerary Saved</h3>
            <button id="closeDialog">x</button>
        </dialog>
    `
    render()
}

// add html to dialog box
const render = () => {
    targetElement.innerHTML = savedMessage
}
