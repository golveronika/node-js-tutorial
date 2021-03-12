require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('604aa2895438fa7cd08b622b').then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(count => {
//     console.log(count)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = Task.countDocuments({ completed: false })
    return count;
}

deleteTaskAndCount('604aa2895438fa7cd08b622b').then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})