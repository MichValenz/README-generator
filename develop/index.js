// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const promptQuestions = () => {


inquirer.prompt([ 
    {
        type: 'input',
        name: 'title',
        message: 'What is your name?',
       
        },


])
}



      //write README
    // fs.writeFile(filename, generateMarkdown(answers, null, '\t'), err =>
    //   err ? console.log(err) : console.log('Success!')
    // );



// TODO: Create a function to write README file
function writeToFile(data) {
  if (!readmeData.projects) {
  readmeData.projects = [];
  }
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project/s title?",
    },

    {
      type: "input",
      name: "description",
      message: "What is the project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "use",
      message: "Describe the use of the project/application.",
    },
    {
      type: "input",
      name: "contributions",
      message: "List those who made contributions to the project",
    },
    {
      type: "input",
      name: "test",
      message:
        "Provide the user instructions on how to run all necessary tests",
    },
    {
      type: "input",
      name: "questions",
      message: "List frequently asked questions with answers",
    },
  ])
  .then((answers) => {
    readmeData.projects.push(answers);
    if (readmeData){
        return readmeData;
    }
  })
}

promptQuestions()
.then(writeToFile)
.then((readmeData) => {
    console.log(readmeData)
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
