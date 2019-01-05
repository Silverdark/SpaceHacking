import Entity from 'Entities/Entity'

export default class Room {

    // Fields

    public entities: Entity[] = [];

    // Methods

    public addEntity(entity: Entity): void {
        for (let savedEntity of this.entities) {
            if (entity.position.isEqual(savedEntity.position))
                return;
        }

        this.entities.push(entity);
    }

}