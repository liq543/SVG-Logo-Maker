// Class for the SVG strings and elements
class SVG {
    constructor() {
    this.textString = '';
    this.shapeOption = '';
    }

    render() {

        return `<svg version="1.1" 
        width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">
        
        ${this.shapeOption}
        
        ${this.textString}
</svg>`

    }

    setTextString(text, color) {
        this.textString = `<text x="150" y="115" font-size="45" text-anchor="middle" fill="${color}">${text}</text>`
        return this.textString;
    }

    setShapeOption(shape){
        this.shapeOption = shape.render();
        return this.shapeOption;
    }
}


module.exports = SVG;