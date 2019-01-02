import Vector2 from "./Vector2";
import Screen from "./Screen";
import Entity from "./Entity";

export default class MainScreen extends Screen {

    // Fields
    private entity: Entity;

    // Constructors
    constructor() {
        super(new Vector2(61, 183), new Vector2(1085, 951));

        this.entity = new Entity(new Vector2(20, 20));
        this.entites.push(this.entity);
    }

    // Methods

    public handleClick(position: Vector2) {
        this.entity.position = position.substract(this.startPoint);
    }
}