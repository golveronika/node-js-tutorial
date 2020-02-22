//const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes')

// console.log(getNotes())

// const greenMsg = chalk.bold.inverse.blue('Success!')
// console.log(greenMsg)

// console.log(process.argv[2])

// 1 - path to the node js executable on my machine
// 2 - path to the app.js file
// 3 - value what I provide

//console.log(validator.isURL('https:/mean.io'))

//console.log(process.argv)

// Customize yargs version

yargs.version('1.1.0')

// add, remove, read, list

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // require value or note
            type: 'string' // type of value
        },
        body: {
            describe: "Write text for your note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body),
    
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title),
})

yargs.command({
    command: 'list',
    describe: 'List a note', 
    handler: () => notes.listNotes(),
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
})

yargs.parse(); // print commands without console.log

// console.log(yargs.argv)
