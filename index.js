const readlineSync = require('readline-sync');
const { SVG, registerWindow } = require('@svgdotjs/svg.js');
const { createSVGWindow } = require('svgdom');

// Create DOM environment
const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

// Text options
const text = readlineSync.question('Enter up to three characters: ').slice(0, 3);
const textColor = readlineSync.question('Enter text color (keyword or hex code): ');

// Shape options
const shapes = ['circle', 'triangle', 'square'];
const shapeIndex = readlineSync.keyInSelect(shapes, 'Choose a shape:');
const shapeColor = readlineSync.question('Enter shape color (keyword or hex code): ');

// Create SVG
const draw = SVG(document.documentElement).size(300, 200);
const shape = shapes[shapeIndex];

if (shape === 'circle') {
    draw.circle(160).move(70, 20).fill(shapeColor);
} else if (shape === 'triangle') {
    draw.polygon('150,20 280,180 20,180').fill(shapeColor);
} else if (shape === 'square') {
    draw.rect(200, 100).move(50, 50).fill(shapeColor);
}

draw.text(text)
    .move(150, 80)
    .fill(textColor)
    .font({ family: 'Verdana', size: 50, anchor: 'middle' });

// Write to file
const fs = require('fs');
const filename = 'logo.svg';
fs.writeFileSync(filename, draw.svg());
console.log(`Generated ${filename}`);
