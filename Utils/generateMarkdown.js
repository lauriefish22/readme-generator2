function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `https://img.shields.io/badge/license-${license}-blue.svg`
    }
    if (license === 'Boost') {
        return `https://img.shields.io/badge/license-${license}-red.svg`
    }
    if (license === 'Eclipse') {
        return `https://img.shields.io/badge/license-${license}-green.svg`
    }

}
function renderLicenseLink(license) {
    return `https://opensource.org/license/${license}`

}

function renderLicenseSection(license) {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}




function generateMarkdown(data) {
    console.log(data);
    return `
# Title
${data.title}


${renderLicenseSection(data.license)}

## Table of Contents

* [Title](#title)  
* [Description](#description) <br/> 
* [Email](#email)  
* [GitHub](#github)  
* [Usage](#usage)  
* [License](#license)
* [Technology](#tech)
* [Installation](#installation)
* [contribution](#contribution)
* [Questions](#questions)

    


## Description
${data.description}

## Email:
${data.email}

## Github
${data.github}

## Usage
${data.usage}

## License
${data.license}

## Technology Used
${data.tech}

## Installation
${data.installation}

## Contribution
${data.contribution}

## Questions
If you have any questions please contact!

[Email](mailto:${data.email})

[GitHub](https://github.com/${data.github})
`
}
module.exports = generateMarkdown;

