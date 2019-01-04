import Vector2 from './Vector2'

export default class Renderer {

    // Fields
    private canvasContext: CanvasRenderingContext2D;

    // Constructor

    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
    }

    // Style methods

    public setFillStyle(fillStyle: string | CanvasGradient | CanvasPattern) {
        this.canvasContext.fillStyle = fillStyle;
    }

    public setStrokeStyle(strokeStyle: string | CanvasGradient | CanvasPattern) {
        this.canvasContext.strokeStyle = strokeStyle;
    }

    public setFont(font: string) {
        this.canvasContext.font = font;
    }

    // Draw methods

    public fillRect(x: number, y: number, width: number, height: number) {
        this.canvasContext.fillRect(x, y, width, height);
    }

    public fillVectorRect(position: Vector2, width: number, height: number) {
        this.fillRect(position.x, position.y, width, height);
    }

    public fillRectangle(startPoint: Vector2, endPoint: Vector2) {
        this.canvasContext.fillRect(startPoint.x, startPoint.y, endPoint.x - startPoint.x, endPoint.y - startPoint.y);
    }

    public strokeRect(x: number, y: number, width: number, height: number) {
        this.canvasContext.strokeRect(x, y, width, height);
    }

    public strokeVectorRect(position: Vector2, width: number, height: number) {
        this.strokeRect(position.x, position.y, width, height);
    }

    public fillText(text: string, x: number, y: number) {
        this.canvasContext.fillText(text, x, y);
    }

    public fillVectorText(text: string, position: Vector2) {
        this.fillText(text, position.x, position.y);
    }

    // Clear methods

    public clearRect(x: number, y: number, width: number, height: number) {
        this.canvasContext.clearRect(x, y, width, height);
    }

    public clearRectangle(startPoint: Vector2, endPoint: Vector2) {
        this.canvasContext.clearRect(startPoint.x, startPoint.y, endPoint.x - startPoint.x, endPoint.y - startPoint.y);
    }

}