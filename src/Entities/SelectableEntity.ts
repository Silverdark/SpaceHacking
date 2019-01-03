import Entity from './Entity'
import Vector2 from 'System/Vector2'
import Renderer from 'System/Renderer'
import Constants from 'System/Constants';

export default abstract class SelectableEntity extends Entity {

    // Fields

    public name: string;
    public isSelected: boolean;

    // Constructor

    constructor(position: Vector2) {
        super(position);
    }

    // Methods

    public render(renderer: Renderer, originPoint: Vector2) {
        super.render(renderer, originPoint);

        if (!this.isSelected)
            return;

        const canvasPosition = originPoint.add(this.position);
        renderer.setStrokeStyle(Constants.entities.selectedStrokeStyle);
        renderer.strokeVectorRect(canvasPosition, Constants.tileSize, Constants.tileSize);
    }
}