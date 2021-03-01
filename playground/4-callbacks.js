const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined);
        callback(undefined, [1 ,4 ,7]);
    }, 2000);
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error);
    }

    console.log(result);
})

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

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


// add(1, 4, (sum) => {
//     console.log(sum)
// })