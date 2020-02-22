const chalk = require('chalk');
const fs = require('fs')

const readNote = (title) => {

    const notes = loadNotes();

    const noteForRead = notes.filter((note) => note.title === title)  

    if (noteForRead.length > 0) {
        console.log(chalk.inverse.white(`Your note: ${noteForRead[0].title}`));
        console.log(chalk.italic.white(noteForRead[0].body));
    } else {
        console.log(chalk.inverse.red("Note not found"));  
    }

}


const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse.white("Your notes"));

    note.forEach(note => {
        console.log(note.title)
    });

    if (notes.length !== filtredNotes.length) {

        saveNotes(filtredNotes)

        console.log(chalk.inverse.green("Note was delete!"))

    } else {
        console.log(chalk.italic.red("This note title doesn't exist!"))
    }
}

const removeNote = (title) => {

    const notes = loadNotes();

    const filtredNotes = notes.filter((notes) => notes.title !== title)

    if (notes.length !== filtredNotes.length) {

        saveNotes(filtredNotes)

        console.log(chalk.inverse.green("Note was delete!"))

    } else {
        console.log(chalk.italic.red("This note title doesn't exist!"))
    }


}

const addNote = (title, body) => {

    const notes = loadNotes();

    const duplicateNote = notes.find(note => note.title === title)

    // debugger

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })

        saveNotes(notes)

        console.log(chalk.inverse.green("Note was add!"))
    } else {

        console.log(chalk.italic.red("This note title already exists!"))

    }



}

const saveNotes = (data) => {

    const dataJSON = JSON.stringify(data);
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {

    console.log(chalk.italic.green("Loading data..."))

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        
        console.log(chalk.italic.green("Data was load successful"))

        return data

    } catch(error) {
        console.log(chalk.italic.red("Error of loading data, [] was return"))

        return []
    }

}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
}