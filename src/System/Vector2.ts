export default class Vector2 {
    // Fields

    public x: number;
    public y: number;

    // Constructors

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Methods

    public add(other: Vector2): Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    addScalar(scalar: number): Vector2 {
        return new Vector2(this.x + scalar, this.y + scalar);
    }

    public substract(other: Vector2): Vector2 {
        return new Vector2(this.x - other.x, this.y - other.y);
    }

    public isInsideRectangle(topLeft: Vector2, rightBottom: Vector2): boolean {
        return this.x >= topLeft.x &&
            this.y >= topLeft.y &&
            this.x <= rightBottom.x &&
            this.y <= rightBottom.y;
    }
}