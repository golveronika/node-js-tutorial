const geocode = (adress, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0,
        }     
        callback(data)           
    })
}

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})


add(1, 4, (sum) => {
    console.log(sum)
})