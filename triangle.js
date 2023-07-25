const Shape = require('./shape');

class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
