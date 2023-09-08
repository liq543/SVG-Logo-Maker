const SVG = require('./svg.js');

describe ('SVG', () => {
    describe('Text', () => {
        it('should return correct textString of SVG', () => {
            const textEx = "ABC";
            const colorEx = "blue";
            const svg = new SVG();
            const solution = `<text x="150" y="115" font-size="45" text-anchor="middle" fill="blue">ABC</text>`;
            expect(svg.setTextString(textEx, colorEx)).toEqual(solution);
        })
    })
})