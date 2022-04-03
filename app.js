const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')

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
    handler: function(){
        console.log(`Adding a new note with the title "${yargs.argv.title}"`)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe:'Removes an existing note',
    handler:function(){
        console.log("Removing an old note")
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'Reads an existing note',
    handler:function(){
        console.log("Reading note")
    }
})


// Create list command
yargs.command({
    command:'list',
    describe:'Lists all existing notes',
    handler:()=>{
        console.log("Listing notes")
    }
})


yargs.parse()