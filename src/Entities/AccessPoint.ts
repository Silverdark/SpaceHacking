import Vector2 from 'System/Vector2'
import Constants from 'System/Constants'
import SelectableEntity from './SelectableEntity';

export default class AccessPoint extends SelectableEntity {

    // Constructors

    constructor(position: Vector2) {
        super(position)

        this.name = "AccessPoint";
        this.fillStyle = Constants.entities.accessPoint.backgroundColor;
    }

    // Methods

    public onClick(position: Vector2) {
        console.log("Clicked access point");
    }

}