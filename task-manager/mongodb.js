// CRUD create update delete

const mongodb = require('mongodb');
const { MongoClient, ObjectID } = mongodb;

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    console.log('Connected correctly!');

    const db = client.db(databaseName);

    // INSERT COLLECTIONS

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 28
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!');
    //     }
    //     //http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~insertOneWriteOpCallback
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunter',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Wake up',
    //         completed: true
    //     },
    //     {
    //         description: 'Wash your face',
    //         completed: false
    //     }, 
    //     {
    //         description: 'Get the breakfast',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!');
    //     }

    //     console.log(result.ops);
    // })

    // QUERY COLLECTIONS

    // db.collection('users').findOne({ _id: new ObjectID('603d52e50ae4764d4c35e989') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to query user!');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 28 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to query users!');
    //     }

    //     console.log(users);
    // })

    // db.collection('users').find({ age: 28 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to query users!');
    //     }

    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('603d562f87e37e7db0f462c4') }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to query task!');
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to query tasks!');
    //     }

    //     console.log(tasks);
    // })

    // UPDATE COLLECTIONS

    // db.collection('users').updateOne(
    //     { _id: new ObjectID('603d51202449bf509c947ea8') }, 
    //     { 
    //         $set: { 
    //             name: 'Jan'
    //         },
    //         $inc: {
    //             age: 1
    //         }
    //     })
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    // db.collection('tasks').updateMany(
    //     { completed: false }, 
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     })
    //     .then(result => {
    //         console.log(result.result)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    // DELETE COLLECTIONS

    // db.collection('tasks').deleteOne({ description: 'Wake up' })
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    // db.collection('users').deleteMany({ age: 28 })
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })


})