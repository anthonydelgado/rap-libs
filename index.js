var say = require('say');
var inquirer = require('inquirer');

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
        name: 'ass'
    },
    {
        type: 'input',
        message: '(Noun) Type of food.',
        name: 'gumbo'
    }
]).then(function (promptdata) {


// Lyrics

    var freestyle = 'Straight out of ' + promptdata.location + '. A crazy ' + promptdata.job + ' named ' + promptdata.name + '. From the gang called  ' + promptdata.nwa + '. When I am called off, I take my ' + promptdata.sawed + ' off. Squeeze the  ' + promptdata.trigger + '. and then ' + promptdata.bodies + ' are hauled off. You too, boy, if ya ' + promptdata.mess + ' with me. Off yo ' + promptdata.ass + '. thats how Im goin out. For the punk ' + promptdata.punk + ' that are showin out. start to mumble, they wanna rumble. Mix em and cook them in a pot like ' + promptdata.gumbo + '. Straight out of ' + promptdata.location;

    console.log(freestyle);

    say.speak(freestyle);


    // console.log('hello ' + user.name + ' from ' + user.location);

    // console.log("Here is the weather in " + user.city);

});
