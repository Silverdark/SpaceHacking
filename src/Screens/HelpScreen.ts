import Vector2 from 'System/Vector2'
import Screen from './Screen'
import Renderer from 'System/Renderer'

export default class HelpScreen extends Screen {

    // Fields

    // Constructors
    constructor() {
        super(new Vector2(1137, 75), new Vector2(1857, 555));
    }

    // Methods

    public render(render: Renderer) {
        render.setFillStyle("#276822");
        render.fillRectangle(this.startPoint, this.endPoint);
    }

    public handleClick(position: Vector2) {
    }
}