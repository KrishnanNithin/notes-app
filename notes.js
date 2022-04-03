const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        console.log(chalk.green("New note added!"))
    }else{
        console.log(chalk.red("Note title taken!"))
    }
    saveNotes(notes)
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const newNotes = notes.filter(note => note.title !== title)
    if (newNotes.length !== notes.length){
        saveNotes(newNotes)
        console.log(chalk.green('Note removed!'))
    }else{
        console.log(chalk.red("No note found!"))
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.green("Your notes are: "))
    for(note of notes){
        console.log(chalk.blue(note.title))
    }
    if(notes.length===0){
        console.log(chalk.red("You have no notes yet!"))
    }
}

const readNotes = (title) =>{
    notes = loadNotes()
    const currentNote = notes.find(note => note.title === title)
    if(currentNote){
        console.log(chalk.blue("Your note is: "))
        console.log(chalk.green(`Title: ${currentNote.title}`))
        console.log(chalk.green(`${currentNote.body}`))
    }else{
        console.log(chalk.red("That note doesn't exist!"))
    }
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    }catch(e){
        return []
    }
}

const saveNotes = notes =>{
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

module.exports = {
    addNote:  addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}