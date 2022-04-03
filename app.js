const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes.js')

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add', 
    describe: 'Adds a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: argv =>  notes.addNote(argv.title, argv.body)
})

// Create remove command
yargs.command({
    command:'remove',
    describe:'Removes an existing note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:argv => notes.removeNote(argv.title)
})

// Create read command
yargs.command({
    command:'read',
    describe:'Reads an existing note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: argv => notes.readNotes(argv.title)
})


// Create list command
yargs.command({
    command:'list',
    describe:'Lists all existing notes',
    handler:()=>notes.listNotes()
})

yargs.parse()