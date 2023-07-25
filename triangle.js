import Shape from './shape.js';

class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 200,150 100,150" fill="${this.color}" />`;
    }
}

export default Triangle;
