import Vector2 from './Vector2'

export default class Renderer {

    // Fields
    private canvasContext: CanvasRenderingContext2D;

    // Constructor

    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
    }

    // Methods

    public setFillStyle(fillStyle: string | CanvasGradient | CanvasPattern) {
        this.canvasContext.fillStyle = fillStyle;
    }

    public fillRect(x: number, y: number, width: number, height: number) {
        this.canvasContext.fillRect(x, y, width, height);
    }

    public fillVectorRect(position: Vector2, width: number, height: number) {
        this.fillRect(position.x, position.y, width, height);
    }

    public fillRectangle(startPoint: Vector2, endPoint: Vector2) {
        this.canvasContext.fillRect(startPoint.x, startPoint.y, endPoint.x - startPoint.x, endPoint.y - startPoint.y);
    }

    public clearRect(x: number, y: number, width: number, height: number) {
        this.canvasContext.clearRect(x, y, width, height);
    }

}