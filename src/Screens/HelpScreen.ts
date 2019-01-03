import Vector2 from 'System/Vector2'
import Screen from './Screen'
import Renderer from 'System/Renderer'
import Game from 'System/Game'
import Level from 'LevelSystem/Level'
import Constants from 'System/Constants'

export default class HelpScreen extends Screen {

    // Fields
    private game: Game;

    // Constructors
    constructor(game: Game) {
        super(new Vector2(Constants.helpScreen.topLeftX, Constants.helpScreen.topLeftY), new Vector2(Constants.helpScreen.rightBottomX, Constants.helpScreen.rightBottomY));

        this.game = game;
    }

    // Methods

    public loadLevel(level: Level): void {
        this.entities = level.activeRoom.entities;
    }

    public render(renderer: Renderer) {
        renderer.setFillStyle(Constants.helpScreen.backgroundColor);
        renderer.fillRectangle(this.startPoint, this.endPoint);

        super.render(renderer);
    }
}