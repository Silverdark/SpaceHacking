import Vector2 from 'System/Vector2'
import Constants from 'System/Constants'
import HackeableEntity from './HackableEntity'

export default class Firewall extends HackeableEntity {

    // Constructors

    constructor(position: Vector2) {
        super(position);

        this.name = "Firewall";
        this.fillStyle = Constants.entities.firewall.backgroundColorNotHacked;
    }

    // Methods

    public onClick(position: Vector2) {
        console.log("Clicked firewall");

        if (this.isHacked)
            return;

        setTimeout(() => {
            this.isHacked = true;
            this.fillStyle = Constants.entities.firewall.backgroundColorHacked;
        }, 2000);
    }

}