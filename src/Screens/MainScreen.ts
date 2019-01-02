import Vector2 from 'System/Vector2'
import Screen from './Screen'
import Constants from 'System/Constants'

export default class MainScreen extends Screen {

    // Fields

    // Constructors
    constructor() {
        super(new Vector2(Constants.mainScreen.topLeftX, Constants.mainScreen.topLeftY), new Vector2(Constants.mainScreen.rightBottomX, Constants.mainScreen.rightBottomY));
    }

    // Methods
}