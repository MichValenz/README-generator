let licenseSelection = ""
let licenseLink = ""

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseResponse) {
  if (licenseResponse === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/licence-MIT-green)](https://opensource.org/licenses/MIT)`;
  } else if (licenseResponse === "Apache License 2.0") {
    return `[![License: Apache License 2.0](https://img.shields.io/badge/licence-Apache-green)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (licenseResponse === "GNU GPLv3") {
    return `[![License: GNU GPLv3](https://img.shields.io/badge/licence-GNU_GPLv3-yellow)](https://opensource.org/licenses/GPL-3.0)`;
  } else if (licenseResponse === "GNU AGPLv3") {
    return ` [![License: GNU AGPLv3](https://img.shields.io/badge/licence-GNU_AGPLv3-yellow)](https://opensource.org/licenses/AGPL-3.0)`;
  } else if (licenseResponse === "GNU LGPLv3") {
    return ` [![License: GNU LGPLv3](https://img.shields.io/badge/licence-GNU_LGPLv3-yellow)](https://opensource.org/licenses/LGPL-3.0)`;
  } else if (licenseResponse === "ISC License") {
    return ` [![License: ISC License](https://img.shields.io/badge/licence-ISC_License-yellow)](https://opensource.org/licenses/ISC)`;
  } else if (licenseResponse === "Mozilla Public License 2.0") {
    return ` [![License: Mozilla Public License 2.0](https://img.shields.io/badge/licence-Mozilla_Public_License_2.0-green)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseResponse === "Boost Software License 1.0") {
    return ` [![License: Boost Software License 1.0](https://img.shields.io/badge/licence-Boost_Software_License_1.0-green)](https://opensource.org/licenses/BSL-1.0)`;
  } else if (licenseResponse === "no") {
    return ``;
  } 
;
}

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
