export const Preview = item => {
    let wifiIconHTML = ""
    if (item.wifi){
         wifiIconHTML = '<i class="fas fa-wifi"></i>' 
    }
    return `<h3>${item.name}</h3>
            ${wifiIconHTML}
            <button class ="detailsButton" id="${item.type}DetailsButton" value="${item.id}">details</button>
            `
}