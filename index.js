// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
// include js file in utils folder
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input for Project Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function questions () {
return inquirer.prompt ([
  {
    type: "input",
    message: "What is the name of your project?",
    name: "project"
},
{
  type: "input",
  message: "What are the steps required to install your project?",
  name: "installation"
},
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "gitname"
  },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 
      'APACHE', 
      'GPL', 
      'BSD', 
      'None'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
     
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "contributing"
  },

    {
      type: "input",
      message: "what kind of content will the users repo have?",
      name: "usage"
  }
    
   
  ]);
}
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
      if (err) {
          console.error(err);
          return ;
      }
      console.log("Success!");
  });
}
// TODO: Create a function to initialize app
function init() {
  questions()
  .then((data) => writeToFile("README.md", generateMarkdown.generateMarkdown(data)))

}
// Function call to initialize app
init();