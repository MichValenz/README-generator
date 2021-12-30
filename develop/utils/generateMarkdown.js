let licenseSelection = ""

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseResponse) {
  if (licenseResponse=== "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/licence-MIT-green)](https://opensource.org/licenses/MIT)\n\n`;
  } else if (licenseResponse === "Apache License 2.0") {
    return `[![License: Apache License 2.0](https://img.shields.io/badge/licence-Apache-green)](https://opensource.org/licenses/Apache-2.0)\n\n`;
  }
  

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// const renderLicenseLink = (license) => {

//     if (license === "MIT") {
//     }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
   ${renderLicenseBadge(answers.license)}   

  # ${answers.title}

  ## Description 
  ${answers.description} 
  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Testing](#Testing)
  * [License](#License)
  * [Questions](#Questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.use}

  ## Contributions
  ${answers.contributions}

  ## Testing 
  ${answers.test}

  ## License 
  This project has an ${answers.license} license.
  

  ## Questions
  Need to reach me?
  * [Email](${answers.email})
  * [GitHub](https://github.com/${answers.github}/${answers.title})


       `;
};


module.exports = generateMarkdown;
