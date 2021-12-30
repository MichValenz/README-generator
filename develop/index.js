// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// An array of questions for user input
//TODO: find a way to add a "skip" options to questions
const writeToFile = () => {
 
 return inquirer
   .prompt([
     {
       type: "input",
       name: "title",
       message: "What is your project/s title?",
       validate: (titleInput) => {
         if (titleInput) {
           return true;
         } else {
           console.log("Please enter a title for your project!");
         }
       },
     },

     {
       type: "input",
       name: "description",
       message: "What is the project description?",
       validate: (descriptionInput) => {
         if (descriptionInput) {
           return true;
         } else {
           console.log("Please add a description of your project/website");
         }
       },
     },
     {
       type: "input",
       name: "installation",
       message: "What are the installation instructions?",
       validate: (installationInput) => {
         if (installationInput) {
           return true;
         } else {
           console.log(
             "Please add a installation instructions for your project/website"
           );
         }
       },
     },
     {
       type: "input",
       name: "use",
       message: "Describe the use of the project/application",
       validate: (useInput) => {
         if (useInput) {
           return true;
         } else {
           console.log("Please add use instructions for your project/website");
         }
       },
     },
     {
       type: "input",
       name: "contributions",
       message: "List those who made contributions to the project",
       validate: (contributionsInput) => {
         if (contributionsInput) {
           return true;
         } else {
           console.log(
             "Please list contributors or other contributions to your project"
           );
         }
       },
     },
     {
       type: "input",
       name: "test",
       message:
         "Provide the user instructions on how to run all necessary tests",
       validate: (testInput) => {
         if (testInput) {
           return true;
         } else {
           console.log("Please add tests for your project");
         }
       },
     },
     {
       type: "list",
       name: "license",
       message: "Select license type",
       choices: [
         "MIT",
         "Apache License 2.0",
         "GNU GPLv3",
         "GNU AGPLv3",
         "GNU LGPLv3",
         "ISC License",
         "Mozilla Public License 2.0",
         "Boost Software License 1.0",
         "The Unlicense",
       ],
       validate: (questionsInput) => {
         if (questionsInput) {
           return true;
         } else {
           console.log("Please select a license for your project.");
         }
       },
     },
     {
       type: "input",
       name: "github",
       message: "What is your GitHub username?",
       validate: (questionsInput) => {
         if (questionsInput) {
           return true;
         } else {
           console.log("Please add your GitHub username");
         }
       },
     },
     {
       type: "input",
       name: "email",
       message: "What is your email address?",
       validate: (questionsInput) => {
         if (questionsInput) {
           return true;
         } else {
           console.log("Please add your email address");
         }
       },
     },
   ])

   .then((answers) => {
 
     return answers;

     
     
   });
};


writeToFile()
.then((answers) => {
    const readMeFile = generateMarkdown(answers);

    fs.writeFile('./utils/README.md', readMeFile, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Page created! Check out the README file in the directory.')
    })
})

