require('../src/db/mongoose');

const User = require('../src/models/user');

// User.findByIdAndUpdate('603ff85fb55c4a37a46eb2ae', {
//     age: 28
// }).then(user => {
//     console.log(user)
//     return User.countDocuments({ age: 0 })
// }).then(count => {
//     console.log(count)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = User.countDocuments({ age })
    return count;
}

updateAgeAndCount('603ff85fb55c4a37a46eb2ae', 29).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})