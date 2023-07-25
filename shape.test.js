const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

describe('Shape tests', () => {
    test('circle render test', () => {
        const circle = new Circle();
        circle.setColor("red");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('triangle render test', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150,20 280,180 20,180" fill="blue" />');
    });

    test('square render test', () => {
        const square = new Square();
        square.setColor("green");
        expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
    });
});
