//const { getParkLatLon } = require("../parks/ParkProvider")
import { Weather } from "./Weather.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".preview__weather")
let weatherArray = [
    {   name : "monday",
        temp : 101,
        mainWeather : "sunny"
    },
    { 
        name : "tuesday",
        temp : 102,
        mainWeather : "cloudy"
    },
    { 
        name : "wednesday",
        temp : 103,
        mainWeather : "rainy"
    },
    { 
        name : "thursday",
        temp : 104,
        mainWeather : "stormy"
    },
    { 
        name : "friday",
        temp : 105,
        mainWeather : "nice"
    },

]

eventHub.addEventListener("parkSelected", event => {
    if (event.detail.id !==0) {
        //let parkObj = getParkLatLon(event.detail.id)
        //getWeather(parkObj).then(()=>{
            //let weatherArray = useWeather()
            getWeatherHTML(weatherArray)
        //})
    }
})

const getWeatherHTML = (weatherArray) => {
    let weatherHTML = ""
    for(const weatherObj of weatherArray){
        weatherHTML += Weather(weatherObj)
    }
    contentTarget.innerHTML = `<article class="preview__weather">${weatherHTML}</article>`
}