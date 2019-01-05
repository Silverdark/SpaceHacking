import Level from './Level'
import Wall from 'Entities/Wall'
import Room from 'Entities/Room'
import Firewall from 'Entities/Firewall'
import Constants from 'System/Constants'
import FalloutTerminal from 'Minigames/FalloutTerminal'
import Door from 'Entities/Door'

export default class Level01 extends Level {

    // Fields

    // Constructors
    constructor() {
        super("Level 01");

        const sampleRoom = new Room();

        const sampleFirewall = new Firewall(this.getPositionByIndex(2, 2), new FalloutTerminal());
        sampleRoom.addEntity(sampleFirewall);

        const door = new Door(this.getPositionByIndex(2, 0), [sampleFirewall]);
        sampleRoom.addEntity(door);

        for (let x = 0; x < Constants.level.elements; x++) {
            for (let y = 0; y < Constants.level.elements; y++) {

                // Create wall
                if (x === 0 || x === Constants.level.elements - 1 || y === 0 || y === Constants.level.elements - 1) {
                    const sampleWall = new Wall(this.getPositionByIndex(x, y));
                    sampleRoom.addEntity(sampleWall);
                }

            }
        }

        this.rooms.push(sampleRoom);
        this.activeRoom = sampleRoom;
    }

}