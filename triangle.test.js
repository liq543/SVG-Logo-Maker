import Triangle from './triangle.js';

describe('Triangle', () => {
    let triangle;
    
    beforeEach(() => {
        triangle = new Triangle();
    });
    
    test('setColor sets color correctly', () => {
        triangle.setColor('red');
        expect(triangle.color).toBe('red');
    });

    test('render returns correct SVG', () => {
        triangle.setColor('blue');
        expect(triangle.render()).toBe('<polygon points="150,50 200,150 100,150" fill="blue" />');
    });
});