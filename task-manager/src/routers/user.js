const express = require('express');
const User = require('./../models/user');
const auth = require('./../middleware/auth')

const router = new express.Router()

router.post('/users', async (req, res) => {

    const user = new User(req.body);

    try {
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }

})

//add middleware function as a second param
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {

    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        } else {
            res.send(user);
        }
    } catch (error) {
        if(error.name === 'CastError'){
            return res.status(400).send('Invalid id')
        }
        res.status(500).send();
    }

})

router.patch('/users/me',auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'});
    }

    try {

        const user = req.user;

        updates.forEach((update) =>  user[update] = req.body[update]);

        await user.save()

        res.send(user);
    } catch (error) {

        res.status(400).send(error);
        
    }

})

router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)
        // if (!user) {
        //     return res.status(404).send()
        // }

        await req.user.remove()
        res.send(req.user);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)

        const token = await user.generateAuthToken()
        res.send({ user , token })

    } catch (error) {
        res.status(400).send({error: 'Unable to login'})
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send()

    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()

    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router