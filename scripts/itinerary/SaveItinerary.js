const eventHub = document.querySelector("#container")
const targetElement = document.querySelector('#dialogContainer')

eventHub.addEventListener("itinerariesStateChanged", event => {
    document.querySelector("#saveItinerary").disabled = true
    itinerarySavedMessage()
})

let savedMessage = ""

const itinerarySavedMessage = () => {
    savedMessage = `
        <dialog open="open">
            <h3>Itinerary Saved</h3>
        </dialog>
    `
    render()
}

// add html to dialog box
const render = () => {
    targetElement.innerHTML = savedMessage
    setTimeout(closeWindow, 2000)
}



const closeWindow = () => {
    const dialogBox = document.querySelector("dialog")
    dialogBox.close()
}