const express = require('express');
const bcrypt = require('bcryptjs')

require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// app.use((req,res, next) => {


//     if (req.method === 'GET') {
//         res.send("Get requests are disabled!")
//     } else {
//         next()
//     }

// })

// app.use((req,res, next) => {


//     res.status(503).send("Server is unavailable. Please try again later.");

// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port , () => {
    console.log('Server is up on port ' + port);
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById("60a3b12f681a442a18a4a1a2")
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById("60a3b064ac69273f48ef7f3e")
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)


}

// main()

//-------------------------------------------------------------

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// } 

// myFunction()