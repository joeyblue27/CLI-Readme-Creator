// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null) {
    return `
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== null) {
    return `* [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== null) {
    return `## License
This project is licensed under the ${license} license.
`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(content) {
  return `# ${content.project}
${renderLicenseBadge(content.license)}
# Description
${content.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(content.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${content.installation}
## Usage
${content.usage}
${renderLicenseSection(content.license)}
## Contributing
${content.contributing}
## Tests
${content.test}
## Contacts
* Email: ${content.email} 
* GitHub: ${content.gituser}`;
}

module.exports =
  generateMarkdown,
  renderLicenseLink,
  renderLicenseSection,
  renderLicenseBadge
  ;

