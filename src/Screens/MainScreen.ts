import Vector2 from 'System/Vector2'
import Screen from './Screen'
import Renderer from 'System/Renderer'

export default class MainScreen extends Screen {

    // Fields

    // Constructors
    constructor() {
        super(new Vector2(61, 183), new Vector2(1085, 951));
    }

    // Methods

    public render(render: Renderer) {
    }

    public handleClick(position: Vector2) {
    }
}