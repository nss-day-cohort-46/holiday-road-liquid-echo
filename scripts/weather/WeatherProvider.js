import { useParks } from '../parks/ParkProvider.js'
import { settings } from '../Settings.js'

// this will hold the 8 day forecast from the api
let weatherCollection = []
// this is a 5 day slice of the 8 day forecast
let fiveDayForecast = []

export const useWeather = () => [...fiveDayForecast]

export const getWeather = park => {
    const location = getParkLatLon(park)
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
    .then(res => res.json())
    .then(parsedRes => {
        weatherCollection = parsedRes.daily
        const eightDayForecast = buildWeatherArray()
        fiveDayForecast = eightDayForecast.slice(0,5)
        console.log(useWeather())
    })
}

// this extracts the lat and lon location from a parkID
export const getParkLatLon = (parkId) => {
    let parks = useParks()
    let park = parks.find(park => parkId === park.id)
    const parkLatLon = {
        id : park.id,
        lat : park.latitude,
        lon : park.longitude
    }
    return parkLatLon
}

// This converts a number [0-6] into a day of the week.
const getDayOfWeek = number => {
    let local = number
    if ((new Date()).getDay() === number ) return "Today"
    if ((new Date()).getDay() + 1 === number ) return "Tomorrow"
    if (local > 6) number -= 7
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return weekDays[number]
}

// this converts the raw daily weather data into an array of the objects we want to use
const buildWeatherArray = () => {
   return weatherCollection.map((day, i) => {
        return {
            name: getDayOfWeek((new Date()).getDay() + i),
            temp: day.feels_like.day,
            mainWeather: day.weather[0].main
        }
    })
}
