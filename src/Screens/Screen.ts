import Vector2 from 'System/Vector2'
import Entity from 'Entities/Entity'
import Renderer from 'System/Renderer'
import Level from 'LevelSystem/Level'
import SelectableEntity from 'Entities/SelectableEntity';

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
        this.getSelectableEntities().forEach(entity => entity.isSelected = false);

        for (let entity of this.entities) {
            if (entity.isPositionOnEntity(position.substract(this.startPoint))) {

                if (entity instanceof SelectableEntity)
                    entity.isSelected = true;

                entity.onClick(position);
                break;
            }
        }
    }

    public getSelectableEntities(): SelectableEntity[] {
        const entities = [];

        for (let entity of this.entities) {
            if (!(entity instanceof SelectableEntity))
                continue;

            entities.push(entity);
        }

        return entities;
    }

    public getSelectedEntity(): SelectableEntity {
        for (let entity of this.getSelectableEntities()) {
            if (entity.isSelected)
                return entity;
        }

        return null;
    }
}