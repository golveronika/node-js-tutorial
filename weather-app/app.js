const { geocode, forecast } = require('./utils')

const address = (process.argv[2]) ? process.argv[2] : 'Prague'

geocode(address, (error, data) => {
   if (data) {
       console.log(`The weather in ${data.placeName} is `)
       forecast(data.coordinates[0], data.coordinates[1] , (error, data) => {
        if (data) {
            console.log(data)
        } else {
            console.log("error: ", error)
        }
       })
   } else {
       console.log("error: ", error)
   }
})


