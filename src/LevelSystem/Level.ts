import Room from 'Entities/Room'
import Vector2 from 'System/Vector2'
import Constants from 'System/Constants'
import Renderer from 'System/Renderer';
import SelectableEntity from 'Entities/SelectableEntity';

export default abstract class Level {

    // Fields
    public static tileSize = 32;

    public name: string;

    public rooms: Room[] = [];
    public activeRoom: Room;

    // Constructors
    constructor(name: string) {
        this.name = name;
    }

    // Methods

    public render(renderer: Renderer, originPoint: Vector2) {
        renderer.setStrokeStyle(Constants.level.borderColor);
        const borderLength = (Constants.tileSize + Constants.level.entityPadding) * Constants.level.elements - Constants.level.entityPadding;
        renderer.strokeVectorRect(originPoint.add(new Vector2(Constants.level.startX, Constants.level.startY)), borderLength, borderLength);

        this.activeRoom.entities.forEach(entity => entity.render(renderer, originPoint));
    }

    public handleClick(position: Vector2) {
        const startPosition = this.getPositionByIndex(0, 0);
        const endPosition = this.getPositionByIndex(Constants.level.elements - 1, Constants.level.elements - 1).add(new Vector2(Constants.tileSize, Constants.tileSize));

        if (!position.isInsideRectangle(startPosition, endPosition))
            return;

        this.getSelectableEntities().forEach(entity => entity.isSelected = false);

        for (let entity of this.activeRoom.entities) {
            if (entity.isPositionOnEntity(position)) {

                if (entity instanceof SelectableEntity)
                    entity.isSelected = true;

                entity.onClick(position);
                break;
            }
        }
    }

    protected getPositionByIndex(x: number, y: number): Vector2 {
        const posX = Constants.level.startX + (Constants.level.entityPadding + Constants.tileSize) * x;
        const posY = Constants.level.startY + (Constants.level.entityPadding + Constants.tileSize) * y;
        return new Vector2(posX, posY);
    }

    public getSelectableEntities(): SelectableEntity[] {
        const entities = [];

        for (let entity of this.activeRoom.entities) {
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