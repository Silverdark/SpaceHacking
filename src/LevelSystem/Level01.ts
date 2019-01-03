import Level from './Level'
import Wall from 'Entities/Wall'
import Room from 'Entities/Room'
import AccessPoint from 'Entities/AccessPoint'

export default class Level01 extends Level {

    // Fields

    // Constructors
    constructor() {
        super("Level 01");

        const sampleRoom = new Room();

        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {

                // Create wall
                if (x === 0 || x === 9 || y === 0 || y === 9) {
                    const sampleWall = new Wall(this.getPositionByIndex(x, y));
                    sampleRoom.entities.push(sampleWall);
                }

            }
        }

        const sampleAccessPoint = new AccessPoint(this.getPositionByIndex(2, 2));
        sampleRoom.entities.push(sampleAccessPoint);

        this.rooms.push(sampleRoom);
        this.activeRoom = sampleRoom;
    }

}