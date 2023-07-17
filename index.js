// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is your project name?', 
        name: 'title',
    }, 
    
    {
        type: 'input', 
        message: 'Description of project', 
        name: 'description',
    },

    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed', 
        name: 'usage',
    },

    {
        type: 'input',
        message: 'What are the steps to install your project?', 
        name: 'dependencies',
    },

    {
        type: 'list',
        message: 'Choose license for your project.', 
        name: 'license',
        choices: [
            {value: 'Apache'},
            {value: 'GNU'},
            {value: 'MIT License'},
            {value: 'BSD 3'},
            {value: 'Boost'},
            {value: 'Creative'},
            {value: 'Eclipse'},
            {value: 'GNU'},
            {value: 'Mozilla'},
            {value: 'None'},
        ]
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project (optional).', 
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please enter your e-mail address:', 
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your Github username:', 
        name: 'github',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your professional README has been generated.");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`README.md`, response);
    })
}

// Function call to initialize app
init();
