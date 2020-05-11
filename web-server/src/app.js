// Command for live update starting application:
// nodemon src/app.js
const { geocode, forecast } = require('./utils')
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000


// Define paths for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handles engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Veronika'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'Weather App',
        name: 'Veronika'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Weather App',
        name: 'Veronika'
    })
})

// Routes HTTP GET requests to the specified path with the specified callback functions.
app.get('/weather', (req, res) => {



    if (!req.query.address) {
        res.send({
            error: "Address as parametr is required!"
        })
    } else {

        geocode(req.query.address, (error, dataGeocode) => {
            if (dataGeocode) {
                //console.log(`The weather in ${data.placeName} is `)
                forecast(dataGeocode.coordinates[0], dataGeocode.coordinates[1] , (error, dataForecast) => {
                 if (dataForecast) {
                    res.send({
                        address: req.query.address,
                        location: dataGeocode.location,
                        forecast: dataForecast.summary
                    })
                 } else {
                    res.send({
                        error
                    })
                 }
                })
            } else {
                res.send({
                    error
                })
            }
         })
    }
    
})

app.get('*', (req, res) => {
    res.render('404',{
        title: 'Weather App',
        name: 'Veronika'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}\nhttp://localhost:3000/`)
})

// app.com
// app.come/help
// app.com/about
