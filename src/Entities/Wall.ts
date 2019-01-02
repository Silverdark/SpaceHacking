import Entity from 'Entities/Entity'
import Vector2 from 'System/Vector2'
import Constants from 'System/Constants'

export default class Wall extends Entity {

    // Constructors

    constructor(position: Vector2) {
        super(position)

        this.fillStyle = Constants.entities.wall.backgroundColor;
    }

    // Methods

}