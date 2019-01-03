import SelectableEntity from './SelectableEntity'
import Vector2 from 'System/Vector2'

export default class HackeableEntity extends SelectableEntity {

    // Fields
    protected isHacked: boolean = false;

    // Constructors

    constructor(position: Vector2) {
        super(position);
    }

    // Methods

    public isEntityHacked(): boolean {
        return this.isHacked;
    }

}