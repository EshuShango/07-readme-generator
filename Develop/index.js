const inquirer = require("inquirer");
const { writeFileSync } = require("fs");


const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage instructions:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide information on how to contribute to the project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide information on how to run tests for the project:",
  },
  {
    type: "list",
    name: "license",
    choices: [
      {
        name: "Apache 2.0 License",
        value:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },

      {
        name: "MIT License",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "Attribution License (BY)",
        value:
          "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
      },
    ],
    message: "Provide information on the license for the project"
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
  {
    type: "input",
    name: "question",
    message: "Enter any questions that you have:",
    
  },
];
 


inquirer.prompt(questions).then((answers) => {
  

  // generate the README.md file
  const readme = `
# ${answers.projectName}


${answers.license}

## Description 🔎
${answers.description}

## Table of Contents 📖
- [Installation](#installation) ⚙️
- [Usage](#usage) 🔑
- [Contributing](#contributing)
- [Tests](#tests) 🧪
${link(answers.license.message)}
- [link](#license) 📝
- [Question](#question)

## Installation ⚙️
${answers.installation}

## Usage 🔑
${answers.usage} 

## Contributing
${answers.contributing}

## Tests 🧪
${answers.tests}

## License 📝
'click the license badge at the beginning of the document to get more info'


## Question 🙋🏾‍♂️ 🙋🏼 🙋🏻‍♀️ 🙋🏿‍♀️ 🙋🏼‍♂️
${answers.question}

You can also find me on GitHub at: [${answers.github}](https://www.github.com/${answers.github})

If there are any questions, feel free to contact my email at: ${answers.email}

`;
function link(license) {
  if (license !== "None") {
    return `- [License](#license-📝)`
  }
  return ``;
}
  // write the README.md file
  writeFileSync("README.md", readme);
});   


