import Vector2 from './System/Vector2'
import Renderer from './System/Renderer'

export default class Entity {

    // Fields

    public position: Vector2;

    // Constructor

    constructor(position: Vector2) {
        this.position = position;
    }

    // Methods

    public render(render: Renderer, originPoint: Vector2) {
        const canvasPosition = originPoint.add(this.position);
        render.fillVectorRect(canvasPosition, 10, 10);
    }
}