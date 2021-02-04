export const Preview = item => {
    return `
                <h3>${item.name}</h3>
                <button class ="detailsButton" id="${item.type}DetailsButton" value="${item.id}">details</button>
            `
}