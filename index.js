var say = require('say');
var inquirer = require('inquirer');
var madlib = require('./madlib.js');
// Use default system voice and speed
// say.speak('Hello! Lets start the game.');


inquirer.prompt([
    {
        type: 'input',
        message: 'what is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'what city are you from?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'What is your job or profession?',
        name: 'job'
    },
    {
        type: 'input',
        message: 'Who do you work for?',
        name: 'nwa'
    },
    {
        type: 'input',
        message: 'Name your favorite  piece of clothing?',
        name: 'sawed'
    },
    {
        type: 'input',
        message: 'Whats your favorite fruit?',
        name: 'trigger'
    },
    {
        type: 'input',
        message: '(Noun Plural) Type of people you dislike.',
        name: 'bodies'
    },
    {
        type: 'input',
        message: '(Action Verb)',
        name: 'mess'
    },
    {
        type: 'input',
        message: '(Noun) Body Part.',
        name: 'ass'
    },
    {
        type: 'input',
        message: '(Noun Plural) Type of people.',
        name: 'punk'
    },
    {
        type: 'input',
        message: '(Noun) Type of food.',
        name: 'gumbo'
    }
]).then(function (d) {


// Lyrics

    var freestyle = new madlib(d.location, d.job, d.name, d.nwa, d.sawed, d.trigger, d.bodies, d.mess, d.ass, d.punk, d.gumbo);

    console.log(freestyle.freestyle);

    say.speak(freestyle.freestyle);
 

});
