// Command for live update starting application:
// nodemon src/app.js

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


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
    res.send({
        forecast: '16 degrees per day',
        location: 'Prague'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: 'Weather App',
        name: 'Veronika'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

// app.com
// app.come/help
// app.com/about
