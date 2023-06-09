# README Generator

## Example
![dist](./dist/Screenshot%202023-04-20%20at%207.10.52%20PM.png)

## Video Demonstration
[See it working!](https://drive.google.com/file/d/1U0joPYfVXcqbGsYdJMYEr1jwyn0sotMt/view)


## Description

This project enables the user to create a ReadMe file using only the command line.  I created a series of questions using Inquirer along with NodeJS to allow the user to simply answer the questions to send an already formatted ReadMe.  This makes a ReadMe file consistent and also makes it easier for the user to produce.

## Technology Used and Credit
* [Inquirer]('https://www.npmjs.com/package/inquirer')
* [NodeJS]('https://nodejs.org/en')
* [FS]('https://www.w3schools.com/nodejs/nodejs_filesystem.asp')

## Installations
NodeJS
Inquirer


## Code Example
This is a snippet of code used to attach the license used to the ReadMe

```function renderLicenseLink(license) {
    return `https://opensource.org/license/${license}`

}

function renderLicenseSection(license) {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

```

## Learning Points

This was a great opportunity to learn just how NodeJs and Inquirer work and how it can simplify so many things.  It was also a chance to practice using template literals as well as learning about fs.