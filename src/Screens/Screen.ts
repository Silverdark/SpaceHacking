import Vector2 from 'System/Vector2'
import Entity from 'Entity'
import Renderer from 'System/Renderer'

export default abstract class Screen {

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

    public render(render: Renderer) {
        // Draw all entities
        this.entites.forEach((entity) => {
            entity.render(render, this.startPoint);
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