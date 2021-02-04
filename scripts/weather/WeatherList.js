import {useWeather, getWeather} from "./WeatherProvider.js"
import { Weather } from "./Weather.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".preview__weather")

eventHub.addEventListener("parkSelected", event => {
    if (event.detail.id !==0) {
        getWeather(event.detail.id).then(()=>{
            let weatherArray = useWeather()
            getWeatherHTML(weatherArray)
        })
    }
})

const getWeatherHTML = (weatherArray) => {
    let weatherHTML = ""
    for(const weatherObj of weatherArray){
        weatherHTML += Weather(weatherObj)
    }
    contentTarget.innerHTML = weatherHTML
}