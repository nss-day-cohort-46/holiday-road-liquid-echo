const targetElement = document.querySelector('#dialogContainer')
const eventHub = document.querySelector('#container')

const PreviewDetail = item => {
    const details = `
        <dialog open="open">
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
    showDialogBox()
})

// removes "hidden" class from the #dialogContainer
const showDialogBox = () => {
    targetElement.classList.remove("hidden")
}

// adds "hidden" class to the #dialogContainer
eventHub.addEventListener("click", e => {
    if (e.target.id !== "#dialogContainer") {
        targetElement.classList.add("hidden")
    }
})