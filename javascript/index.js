const fs = require("fs");

const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the name of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter instructions on how to install your project:",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter instructions on how to use your project:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter how people can contribute to your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter testing instructions for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPL-3.0", "MPL-2.0", "Apache-2.0", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
];

function generateReadMe(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license) 

## Installation
${"```"}
${answers.installation}
${"```"}
## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## License
${generateLicense(answers.license)}

## Questions
[GitHub](https://github.com/${answers.github})

[Repo Link](https://github.com/${answers.github}/${answers.title})

For any questions reach out to me at ${answers.email}`;
}

inquirer.prompt(questions).then((answers) => {
  fs.writeFile("README.md", generateReadMe(answers), (err) =>
    err ? console.error(err) : console.log("It worked!")
  );
});

function generateLicense(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GPL-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MPL-2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "None":
      return "";
      break;
  }
}
