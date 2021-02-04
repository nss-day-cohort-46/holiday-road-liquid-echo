export const Preview = item => {
    return `
            <article class="preview__${item.type}">
                <h3>${item.name}</h3>
                <button class ="detailsButton" id="${item.type}DetailsButton" value="${item.id}">details</button>
            </article>`
}