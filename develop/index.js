// Packages needed for this application
const inquirer = require("inquirer");
//const fs = require("fs");
//const generateMarkdown = require("./utils/generateMarkdown.js");

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
           console.log("Please add a description of your project/website.");
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
             "Please add a installation instructions for your project/website."
           );
         }
       },
     },
     {
       type: "input",
       name: "use",
       message: "Describe the use of the project/application.",
       validate: (useInput) => {
         if (useInput) {
           return true;
         } else {
           console.log("Please add use instructions for your project/website.");
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
             "Please list contributors or other contributions to your project."
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
           console.log("Please add tests for your project.");
         }
       },
     },
     {
       type: "input",
       name: "questions",
       message: "List frequently asked questions with answers",
       validate: (questionsInput) => {
         if (questionsInput) {
           return true;
         } else {
           console.log("Please add a Q&A section for your project.");
         }
       },
     },
   ])
   .then((answers) => {
     console.log(answers);
   });
}

writeToFile();


// TODO: Create a function to write README file
// //writeToFile()
// //.then(writeToFile)
// .then((readmeData) => {
//     console.log(readmeData)
// });

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init()
