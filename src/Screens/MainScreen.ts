import Vector2 from 'System/Vector2'
import Screen from './Screen'
import Constants from 'System/Constants'
import Game from 'System/Game'
import Renderer from 'System/Renderer'

export default class MainScreen extends Screen {

    // Constructors

    constructor(game: Game) {
        super(game, new Vector2(Constants.mainScreen.topLeftX, Constants.mainScreen.topLeftY), new Vector2(Constants.mainScreen.rightBottomX, Constants.mainScreen.rightBottomY));
    }

    // Methods

    public render(renderer: Renderer) {
        renderer.setFillStyle(Constants.helpScreen.backgroundColor);
        renderer.fillRectangle(this.startPoint, this.endPoint);

        super.render(renderer);

        if (this.game.currentLevel.currentMinigame != null)
            this.game.currentLevel.currentMinigame.render(renderer, this.startPoint);
    }

    public handleClick(position: Vector2) {
        this.game.currentLevel.currentMinigame.handleClick(position.substract(this.startPoint));
    }
}