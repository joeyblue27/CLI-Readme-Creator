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
function generateMarkdown({license, project, description, installation, usage, contributing, test, email, gituser}) {
  ls = renderLicenseSection(license);
  lb = renderLicenseBadge(license);
  ll = renderLicenseLink(license);
  return `# 
  
  ${project}
  # Description
  ${description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Contributing
  ${contributing}
  ## Tests
  ${test}
  ## Questions
  ${lb}
  ${ll}
  ${ls}
  
Contact me at: ${email}.
My Github is at [GitHub](https://github.com/${gituser})`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};

