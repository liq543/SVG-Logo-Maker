class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract class Shape cannot be instantiated directly");
        }
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error("Method 'render()' must be implemented");
    }
}

export default Shape;
