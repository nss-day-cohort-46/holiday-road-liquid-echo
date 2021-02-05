import { getCoordinates } from "../directions/DirectionProvider.js"

const targetElement = document.querySelector('#dialogContainer')
const eventHub = document.querySelector('#container')

const PreviewDetail = item => {
    const details = `
        <dialog open="open">
            <button id="closeDialog">x</button>
            <h3>${item.name}</h3>
            <h4>${item.city}, ${item.state}</h4>
            <p>${item.description}</p>
        </dialog>
    `
    render(details)
}

// add html to dialog box
const render = dialog => {
    targetElement.innerHTML = dialog
}

// listen for details button to be clicked, needs the object in the payload
eventHub.addEventListener("detailsClicked", e => {
    const item = e.detail.item
    PreviewDetail(item)
})


// close the dialox box on x button
eventHub.addEventListener("click", e => {
    if (e.target.id === "closeDialog") {
        const dialogBox = document.querySelector("dialog")
        dialogBox.close()
    }
})