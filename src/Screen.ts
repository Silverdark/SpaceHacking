import Vector2 from "./Vector2";
import Entity from "./Entity";

export default class Screen {

    // Fields

    protected startPoint: Vector2;
    protected endPoint: Vector2;

    protected entites: Entity[] = [];

    // Constructors

    constructor(startPoint: Vector2, endPoint: Vector2) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    // Methods

    public render(canvasContext: CanvasRenderingContext2D) {
        // Draw all entities
        this.entites.forEach((entity) => {
            const position = entity.position;
            canvasContext.fillRect(this.startPoint.x + position.x, this.startPoint.y + position.y, 10, 10);
        });
    }

    public update() {
    }

    public handleClick(position: Vector2) {
    }

    // Utilities

    public isInsideScreen(position: Vector2): boolean {
        return  position.x >= this.startPoint.x &&
            position.y >= this.startPoint.y &&
            position.x <= this.endPoint.x &&
            position.y <= this.endPoint.y;
    }
}