// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `https://opensource.org/license/${license}`

}



function renderLicenseBadge(license) {

    if (license === 'MIT') {
        return `https://img.shields.io/badge/license-${license}-blue`
    }
    if (license === 'Boost') {
        return `https://img.shields.io/badge/license-${license}-red`
    }
    if (license === 'Eclipse') {
        return `https://img.shields.io/badge/license-${license}-blue`
    }


}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    } else {
        return `## License
        `
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("FROM GM>>>", data)
    return `# ${data.name}
    ${renderLicenseBadge(data.license)}

## Table of Contents

[Title](#title)
[Description](#description)
[Email](#email)
[GitHub](#github)
[Usage](#usage)
[License](#license)
[Technology](#technology)
[Installation](#installation)
[contribution](#contribution)
[Questions](#questions)

    
## Title
${data.title}

## Description
${data.description}

## Email:
        <a href="${data.email}"></a>

## Github
${data.github}

## Usage
${data.usage}

## License
${data.license}

## Technology Used
${data.technology}

## Installation
${data.installation}

## Contribution
${data.contribution}

## Questions
If you have any questions please contact!

        [Email] ${data.email}
        <a href="${data.email}"></a>
        [GitHub]('https://github.com${data.github}')


            `;
}



module.exports = generateMarkdown;

