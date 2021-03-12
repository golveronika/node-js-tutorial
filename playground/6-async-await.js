const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000);
    })
}


const doWork = async () => {

    const sum = await add(1, 99);
    const sum2 = await add(sum, -50);
    return sum2

    // throw new Error('Something went wrong!')


}

doWork().then(results => {
    console.log(results)
}).catch(e => {
    console.log(e)
})