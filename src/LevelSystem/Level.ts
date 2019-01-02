import Room from 'Entities/Room'
import Vector2 from 'System/Vector2'
import Constants from 'System/Constants'

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

    protected getPositionByIndex(x: number, y: number): Vector2 {
        const posX = Constants.level.startX + (Constants.level.entityPadding + Constants.tileSize) * x;
        const posY = Constants.level.startY + (Constants.level.entityPadding + Constants.tileSize) * y;
        return new Vector2(posX, posY);
    }
}