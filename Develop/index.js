// TODO: Include packages needed for this application
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions, Project Title and Linka
// TODO: Create an array of questions for user input. Questions objects here.
const {prompt} = require('inquirer');
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'What is the title of your project?'
    }
];
function promptUser(){
    prompt(questions)
      .then((readMeData) => {

        console.log(`You're Project title is:${readMeData.title}`)
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
