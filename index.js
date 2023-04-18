const inquirer = require("inquirer");

inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?',
        }
    ])
    .then((response) => {
        console.log(response)
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    }
    );