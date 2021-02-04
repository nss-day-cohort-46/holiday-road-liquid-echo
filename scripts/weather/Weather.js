export const Weather = item => {
    return `
            <article class="preview__${item.type}">
                <h3>${item.name}</h3>
                <button class ="detailsButton" id="${item.type}DetailsButton" value="${item.id}">details</button>
            </article>
    <div class="weatherCard">
        <p>day1</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    `
}

    <article class="preview__forecast">
    <div class="weatherCard">
        <p>day2</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    <div class="weatherCard">
        <p>day3</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    <div class="weatherCard">
        <p>day4</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    <div class="weatherCard">
        <p>day5</p>
        <p>temp</p>
        <p>forecast</p>
    </div>
    </article>
