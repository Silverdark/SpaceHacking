import Vector2 from 'System/Vector2'
import SelectableEntity from './SelectableEntity'
import Constants from 'System/Constants'
import HackeableEntity from './HackableEntity'

export default class Door extends SelectableEntity {

    // Fields

    private requiredHackedEntities: HackeableEntity[];

    // Constructors

    constructor(position: Vector2, requiredHackedEntities: HackeableEntity[]) {
        super(position, "Door");

        this.fillStyle = Constants.entities.door.backgroundColor;
        this.requiredHackedEntities = requiredHackedEntities;
    }

    // Methods

    public getMissingRequirements(): HackeableEntity[] {
        const missingRequirements = [];

        for (let entity of this.requiredHackedEntities) {
            if (entity.isEntityHacked() === false)
                missingRequirements.push(entity);
        }

        return missingRequirements;
    }

}