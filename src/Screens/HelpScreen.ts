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

        // Render all entities
        super.render(renderer);

        // Draw selected entity
        renderer.setFont(Constants.helpScreen.font);
        renderer.setFillStyle(Constants.helpScreen.fontColor);

        const selectedEntity = this.getSelectedEntity();
        const selectedEntityName = selectedEntity == null ? "None" : selectedEntity.name;

        renderer.fillVectorText(`Entity: ${selectedEntityName}`, this.startPoint.add(new Vector2(20, 80)));
    }
}