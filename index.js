const inquirer = require('inquirer');
const { SVG, registerWindow } = require('@svgdotjs/svg.js');
const { createSVGWindow } = require('svgdom');
const fs = require('fs');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

const shapes = {
    'circle': Circle,
    'triangle': Triangle,
    'square': Square
};

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 ? true : 'Text can be up to 3 characters long'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex code):'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex code):'
    }
]).then(answers => {
    const draw = SVG(document.documentElement).size(300, 200);

    const shape = new shapes[answers.shapeType]();
    shape.setColor(answers.shapeColor);
    draw.svg(shape.render());

    draw.text(answers.text)
        .move(150, 80)
        .fill(answers.textColor)
        .font({ family: 'Verdana', size: 50, anchor: 'middle' });

    const filename = 'logo.svg';
    fs.writeFileSync(filename, draw.svg());
    console.log(`Generated ${filename}`);
});
