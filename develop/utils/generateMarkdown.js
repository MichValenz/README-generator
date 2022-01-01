let licenseSelection = ""
let licenseLink = ""


// a function that returns a license badge based on which license is passed in
function renderLicenseBadge(licenseSelection) {
  if (licenseSelection == "no"){
    return ``
  } else if (licenseSelection)
  return `[![License: ${licenseSelection}](https://img.shields.io/static/v1?label=license&message=${licenseSelection}&color=green)](https://opensource.org/licenses/${licenseSelection})\n\n`;



}


// a function that returns the license link
// If there is no license, return an empty string
 function renderLicenseLink(licenseLink){   
  
  if (licenseLink === "no") {
    return ``;
  } 
  
  else if (licenseLink) {
    return `https://opensource.org/licenses/${licenseLink}\n\n`;
  
  } 
;
}


// a function to generate markdown for README
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
  ${renderLicenseLink(answers.license)} 
  

  ## Questions
  Need to reach me?
  * Email: ${answers.email}
  * [GitHub](https://github.com/${answers.github}/${answers.title})


       `;
};


module.exports = generateMarkdown;
