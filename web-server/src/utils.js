const fetch = require('node-fetch')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidmVyb25pa2Fnb2xvdmFub3ZhIiwiYSI6ImNrNzF3cmZhdDBhbjMzbG1vdG4zZTg3aDIifQ.8hr-PLdj5pIpGw8HMm7zfw`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.features.length > 0) {
            const { coordinates } = data.features[0].geometry
            const { text, place_name } = data.features[0]
            callback(null, {coordinates, placeName: text, location: place_name})
        } else {
            callback("Can't find this location!", null)
        }
    })
    .catch(() => callback("Error!", null))
} 


const forecast = (latitude,longitude, callback) => {

const url = `https://api.darksky.net/forecast/99d27595773a98c2d6bece27d8e7f1c8/${longitude},${latitude}?units=si`

fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            callback(data.error, null)
        } else {
            //callback(null, `${data.daily.data[0].summary} It is currently ${data.currently.temperature} degrees out. There is a ${data.currently.precipProbability}% chance of rain.`)
            callback(null, {
                summary: data.daily.data[0].summary, 
                temperature: data.currently.temperature ,
                precipProbability: data.currently.precipProbability})
        }
    })
    .catch(() => callback("Error!", null))
}

module.exports = {
    geocode,
    forecast,
}