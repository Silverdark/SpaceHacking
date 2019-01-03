import Vector2 from 'System/Vector2'
import Renderer from 'System/Renderer'
import Constants from 'System/Constants'

export default abstract class Entity {

    // Fields

    public position: Vector2;
    public fillStyle: string | CanvasGradient | CanvasPattern;

    // Constructor

    constructor(position: Vector2) {
        this.position = position;
    }

    // Methods

    public render(renderer: Renderer, originPoint: Vector2) {
        const canvasPosition = originPoint.add(this.position);

        if (this.fillStyle != null)
            renderer.setFillStyle(this.fillStyle);

        renderer.fillVectorRect(canvasPosition, Constants.tileSize, Constants.tileSize);
    }

    public isPositionOnEntity(position: Vector2): boolean {
        return position.isInsideRectangle(this.position, this.position.addScalar(Constants.tileSize));
    }

    public onClick(position: Vector2) {
    }
}