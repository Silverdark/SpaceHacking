import Entity from 'Entities/Entity'
import Vector2 from 'System/Vector2'
import Constants from 'System/Constants'

export default class AccessPoint extends Entity {

    // Constructors

    constructor(position: Vector2) {
        super(position)

        this.fillStyle = Constants.entities.accessPoint.backgroundColor;
    }

    // Methods

    public onClick(position: Vector2) {
        console.log("Clicked access point");
    }

}