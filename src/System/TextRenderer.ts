import Renderer from './Renderer'
import Vector2 from './Vector2'

export default class TextRenderer {

    // Fields

    public nextPosition: Vector2;
    private renderer: Renderer;
    private nextLinePadding: number;

    // Constructors

    constructor(renderer: Renderer, originPoint: Vector2, nextLinePadding: number) {
        this.renderer = renderer;
        this.nextPosition = originPoint;
        this.nextLinePadding = nextLinePadding;
    }

    // Methods

    public drawText(text: string) {
        this.renderer.fillVectorText(text, this.nextPosition);
        this.nextPosition = this.nextPosition.add(new Vector2(0, this.nextLinePadding));
    }

    public addSpacing(spacing: number) {
        this.nextPosition = this.nextPosition.add(new Vector2(0, spacing));
    }
}