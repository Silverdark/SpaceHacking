import Vector2 from 'System/Vector2'
import Entity from 'Entities/Entity'
import Renderer from 'System/Renderer'
import Level from 'LevelSystem/Level'

export default abstract class Screen {

    // Fields

    public startPoint: Vector2;
    public endPoint: Vector2;

    protected entities: Entity[] = [];

    // Constructors

    constructor(startPoint: Vector2, endPoint: Vector2) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    // Methods

    public loadLevel(level: Level): void {
    }

    public render(renderer: Renderer) {
        // Draw all entities
        this.entities.forEach(entity => entity.render(renderer, this.startPoint));
    }

    public update() {
    }

    public handleClick(position: Vector2) {
        this.entities.forEach(entity => entity.isSelected = false);

        for (let entity of this.entities) {
            if (entity.isPositionOnEntity(position.substract(this.startPoint))) {
                entity.isSelected = true;
                entity.onClick(position);
                break;
            }
        }
    }
}