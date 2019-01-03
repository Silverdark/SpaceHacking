import Vector2 from 'System/Vector2'
import Entity from 'Entities/Entity'
import Renderer from 'System/Renderer'
import Level from 'LevelSystem/Level'
import Game from 'System/Game'

export default abstract class Screen {

    // Fields

    public startPoint: Vector2;
    public endPoint: Vector2;

    protected game: Game;
    protected entities: Entity[] = [];

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
        // Draw all entities
        this.entities.forEach(entity => entity.render(renderer, this.startPoint));
    }

    public update() {
    }

    public handleClick(position: Vector2) {
        this.game.currentLevel.handleClick(position.substract(this.startPoint));
    }
}