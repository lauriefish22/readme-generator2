const inquirer = require('inquirer');
const questions = require("./Utils/questions.js")
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown.js');

function writeToFile(fileName, data) {
    fs.writeFile("./dist/README.md", generateMarkdown(data), err => console.log(err))

}

function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response);
            // writeToFile('README.md', response);
            const printMarkdown = generateMarkdown(response);
            writeToFile('README.md', printMarkdown)
        })
}
init();