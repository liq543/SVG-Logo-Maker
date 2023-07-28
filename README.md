# SVG Logo Generator

A simple Node.js command-line application for generating SVG logos. Perfect for freelance web developers who want a quick, customizable logo for their projects without having to pay a graphic designer.

## Features

* Enter up to three characters for your logo text.
* Choose your text color using color keywords or hex codes.
* Choose a shape for your logo from a list of available shapes: circle, triangle, square.
* Choose your shape color using color keywords or hex codes.
* Generates an SVG file named `logo.svg`.

## Installation

This application requires Node.js to be installed on your machine.

1. Clone this repository:
    ```bash
    git clone https://github.com/liq543/SVG-Logo-Maker.git
    ```
2. Navigate to the project directory:
    ```bash
    cd SVG-Logo-Maker
    ```
3. Install dependencies:
    ```bash
    npm install readline-sync
    npm install @svgdotjs/svg.js
    npm install svgdom
    ```
4. Run the application:
    ```bash
    node index.js
    ```
Follow the prompts to generate your SVG logo.

## Dependencies

This project uses the following Node.js libraries:

* `readline-sync` - for command-line user input
* `svg.js` - for generating SVG content
* `svgdom` - for creating a DOM environment for svg.js to work in a Node.js environment

## License

This project is licensed under the terms of the MIT License.
