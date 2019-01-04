import Level from './Level'
import Wall from 'Entities/Wall'
import Room from 'Entities/Room'
import Firewall from 'Entities/Firewall'
import Constants from 'System/Constants'
import FalloutTerminal from 'Minigames/FalloutTerminal';

export default class Level01 extends Level {

    // Fields

    // Constructors
    constructor() {
        super("Level 01");

        const sampleRoom = new Room();

        for (let x = 0; x < Constants.level.elements; x++) {
            for (let y = 0; y < Constants.level.elements; y++) {

                // Create wall
                if (x === 0 || x === Constants.level.elements - 1 || y === 0 || y === Constants.level.elements - 1) {
                    const sampleWall = new Wall(this.getPositionByIndex(x, y));
                    sampleRoom.entities.push(sampleWall);
                }

            }
        }

        const sampleFirewall = new Firewall(this.getPositionByIndex(2, 2), new FalloutTerminal());
        sampleRoom.entities.push(sampleFirewall);

        this.rooms.push(sampleRoom);
        this.activeRoom = sampleRoom;
    }

}