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
    npm install inquirer svg.js svgdom jest
    ```
4. Run the application:
    ```bash
    node index.js
    ```
Follow the prompts to generate your SVG logo.

## Testing

This project uses Jest for testing. Run the tests with the following command:
```bash
npm test
```

## Dependencies

This project uses the following Node.js libraries:

inquirer - for command-line user input

svg.js - for generating SVG content

svgdom - for creating a DOM environment for svg.js to work in a Node.js environment

jest - for testing

## License

This project is licensed under the MIT license.
