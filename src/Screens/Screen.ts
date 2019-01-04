import Vector2 from 'System/Vector2'
import Renderer from 'System/Renderer'
import Level from 'LevelSystem/Level'
import Game from 'System/Game'

export default abstract class Screen {

    // Fields

    public startPoint: Vector2;
    public endPoint: Vector2;

    protected game: Game;

    // Constructors

    constructor(game: Game, startPoint: Vector2, endPoint: Vector2) {
        this.game = game;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    // Methods

    public loadLevel(level: Level): void {
    }

    public render(renderer: Renderer) {
    }

    public update() {
    }

    public handleClick(position: Vector2) {
    }
}