export const Weather = day => {
    return `
    <div class="weatherCard">
        <p>${day.name}</p>
        <p>${day.temp}°F</p>
        <p>${day.mainWeather}</p>
    </div>
    `
}