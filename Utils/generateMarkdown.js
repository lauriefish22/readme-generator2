function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `https://img.shields.io/badge/license-${license}-blue.svg`
    }
    if (license === 'Boost') {
        return `https://img.shields.io/badge/license-${license}-red.svg`
    }
    if (license === 'Eclipse') {
        return `https://img.shields.io/badge/license-${license}-blue.svg`
    }

}
function renderLicenseLink(license) {
    return `https://opensource.org/license/${license}`

}

function renderLicenseSection(license) {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}




function generateMarkdown(data) {

    return `# ${data.title}
    ${renderLicenseSection(data.license)}

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

    
# ${data.title}

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

[Email] (mailto:${data.email})

    [GitHub]("https://github.com${data.github}")
        ;
    
module.exports = generateMarkdown;

