import Vector2 from 'System/Vector2'
import Screen from './Screen'
import Renderer from 'System/Renderer'
import Game from 'System/Game'
import Level from 'LevelSystem/Level'
import Constants from 'System/Constants'
import HackeableEntity from 'Entities/HackableEntity'
import Door from 'Entities/Door'

export default class HelpScreen extends Screen {

    // Fields

    private currentTextLine: number = 0;

    // Constructors

    constructor(game: Game) {
        super(game, new Vector2(Constants.helpScreen.topLeftX, Constants.helpScreen.topLeftY), new Vector2(Constants.helpScreen.rightBottomX, Constants.helpScreen.rightBottomY));

        this.game = game;
    }

    // Methods

    public loadLevel(level: Level): void {
    }

    public render(renderer: Renderer) {
        this.currentTextLine = 0;

        renderer.setFillStyle(Constants.helpScreen.backgroundColor);
        renderer.fillRectangle(this.startPoint, this.endPoint);

        // Render all entities
        super.render(renderer);

        // Render all level specific entities
        this.game.currentLevel.render(renderer, this.startPoint);

        // Draw selected entity
        renderer.setFont(Constants.screens.defaultFont);
        renderer.setFillStyle(Constants.screens.defaultFontColor);

        const selectedEntity = this.game.currentLevel.getSelectedEntity();
        const selectedEntityName = selectedEntity == null ? "Nothing" : selectedEntity.name;
        this.drawText(renderer, `Selected: ${selectedEntityName}`);

        if (selectedEntity != null) {
            if (selectedEntity instanceof HackeableEntity)
                this.drawText(renderer, `State: ${selectedEntity.isEntityHacked() ? 'Hacked' : "Not hacked"}`);

            if (selectedEntity instanceof Door) {
                const requirements = selectedEntity.getMissingRequirements()
                const allRequirementsFulfilled = requirements.length === 0;

                this.drawText(renderer, "");
                this.drawText(renderer, "Requirements: " + (allRequirementsFulfilled ? "None" : ""));

                if (!allRequirementsFulfilled)
                    requirements.forEach(entity => this.drawText(renderer, ` - ${entity.name}`));
            }
        }
    }

    public handleClick(position: Vector2) {
        this.game.currentLevel.handleClick(position.substract(this.startPoint));
    }

    private drawText(renderer: Renderer, text: string) {
        this.currentTextLine++;
        const textPosition = new Vector2(Constants.helpScreen.helpTextStartX, Constants.helpScreen.helpTextStartY + 24 * this.currentTextLine);
        renderer.fillVectorText(text, this.startPoint.add(textPosition));
    }
}