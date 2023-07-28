const Shape = require('./shape');

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

module.exports = Square;
