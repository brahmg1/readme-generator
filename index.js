// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username.");
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter your email address.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter your project description.');
                return false;
            }
        }
    },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
