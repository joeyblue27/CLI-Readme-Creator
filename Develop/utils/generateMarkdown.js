// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 0) {
      return `
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 0) {
      return `* [License](#license)`;
}
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 0) {
    return `## License
This project is licensed under the ${license} license.
`;
  } 
  return '';
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown({project, description, installation, usage, contributing, test, email, gituser}) {
  return `# 
  
  ${project}
ls = renderLicenseSection(license);
lb = renderLicenseBadge(license);
ll = renderLicenseLink(license);
${lb}
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${ll}
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${test}
## Questions
${ls}

Contact me at: ${email}.
My Github is at [GitHub](https://github.com/${gituser})`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
//   makeMarkdown,
};

