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

    public substract(other: Vector2): Vector2 {
        return new Vector2(this.x - other.x, this.y - other.y);
    }
}