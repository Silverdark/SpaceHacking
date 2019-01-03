import Vector2 from 'System/Vector2'
import Screen from './Screen'
import Constants from 'System/Constants'
import Game from 'System/Game'

export default class MainScreen extends Screen {

    // Constructors

    constructor(game: Game) {
        super(game, new Vector2(Constants.mainScreen.topLeftX, Constants.mainScreen.topLeftY), new Vector2(Constants.mainScreen.rightBottomX, Constants.mainScreen.rightBottomY));
    }

    // Methods
}