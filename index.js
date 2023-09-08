// Importing all necessary files
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle} = require('./lib/shapes.js')
const SVG = require('./lib/svg.js');

// Function to prompt questions
function questions() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What text do you want to display in the logo? (Enter up to  3 characters)',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color do you want for the text in the logo? (Enter color keyword or a hexadecimal number)',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Which shape would you prefer for the logo?',
                name: 'shape',
                choices: ['Triangle', 'Square', 'Circle']
            },
            {
                type: 'input',
                message: 'What color do you want for the shape? (Enter color keyword or a hexadecimal number)',
                name: 'shapeColor',
            },
        ])
        .then((response) => {
            // console.log(response)
            generateSVG(response)

            if (response.text.length > 3) {
                console.log('Your text cannot be more than 3 characters.');
                questions();
            } else {
                writeToFile('logo.svg', svgString)
            }
        })
}

// Global empty string to generate string for SVG
let svgString = "";

// Function to generate SVG with responses
function generateSVG(response) {
    
    let shapeOption;

    if (response.shape === 'Triangle') {
        shapeOption = new Triangle();
    } else if (response.shape === 'Square') {
        shapeOption = new Square()
    } else if (response.shape === 'Circle') {
        shapeOption = new Circle()
    }

    shapeOption.setColor(response.shapeColor);


    const svg = new SVG();
    svg.setTextString(response.text, response.textColor);
    svg.setShapeOption(shapeOption)
    svgString = svg.render()
}

// Function to write the SVG file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!!'))
}

questions()