const iconify = text => {
    const icons = {
        Clear: "sun",
        Rain: "cloud-rain",
        Snow: "snowflake",
        Clouds: "cloud"
    }
    return icons[text]
}

export const Weather = day => {
    return `
    <div class="weatherCard">
        <p>${day.name}</p>
        <p>${day.temp}°F</p>
        <i class="fas fa-${iconify(day.mainWeather)} fa-2x"></i>
    </div>
    `
}