import Shape from './shape.js';

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

export default Circle;
