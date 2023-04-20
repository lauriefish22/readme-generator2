const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Let's make a README!  Please enter your first and last name.",
        validate: (response) => {
            if (response === '') {
                return 'Your name is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter our email",
        validate: (response) => {
            if (response === '') {
                return 'Your email is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: (response) => {
            if (response === '') {
                return 'Your GitHub username is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?",
        validate: (response) => {
            if (response === '') {
                return 'The project title is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Write the description of your project",
        validate: (response) => {
            if (response === '') {
                return 'Description is required'
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage:',
        validate: (response) => {
            if (response === '') {
                return 'Usage is required'
            }

            return true;
        }
    },
    // 
    {
        type: 'list',
        name: 'tech',
        message: "Which technologies did you use?",
        choices: ['HTML', 'CSS', 'JavaScript', 'React'],
        validate: (response) => {
            if (response === '') {
                return 'Answer is required'
            }

            return true;
        }
    },

    {
        type: 'list',
        name: 'license',
        message: "Which license would you like?",
        choices: ['MIT', 'Boost', 'Eclipse'],
        validate: (response) => {
            if (response === '') {
                return 'License is required'
            }

            return true;
        }
    },
    {

        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?",

        validate: (response) => {
            if (response === '') {
                return 'Answer is required'
            }

            return true;
        }
    },
    {

        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines?",

        validate: (response) => {
            if (response === '') {
                return 'Answer is required'
            }

            return true;
        }
    },


]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            const content = generateMarkdown(response);

            writeToFile("README.md", content)
        })
}
init();


