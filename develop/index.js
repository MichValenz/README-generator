// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project/s title?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'use',
        message: 'Describe the use of the project/application.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List those who made contributions to the project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide the user instructions on how to run all necessary tests'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'List frequently asked questions with answers'
    },


])

  .then(answers => {
    const filename = `${answers.name
      .toLowerCase()
      .split(' ')
      .join('')}.json`;


      //write README
    fs.writeFile(filename, generateMarkdown(answers, null, '\t'), err =>
      err ? console.log(err) : console.log('Success!')
     );
  });


// TODO: Create a function to write README file
//function writeToFile("README.md", data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
