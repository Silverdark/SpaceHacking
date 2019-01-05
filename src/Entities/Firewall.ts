import Vector2 from 'System/Vector2'
import Constants from 'System/Constants'
import HackeableEntity from './HackableEntity'
import IMinigame from 'Minigames/IMinigame'

export default class Firewall extends HackeableEntity {

    // Constructors

    constructor(position: Vector2, minigame: IMinigame) {
        super(position, "Firewall", minigame);

        this.fillStyle = Constants.entities.firewall.backgroundColorNotHacked;
    }

    // Methods

    public setHacked(): void {
        super.setHacked();

        this.fillStyle = Constants.entities.firewall.backgroundColorHacked;
    }

}