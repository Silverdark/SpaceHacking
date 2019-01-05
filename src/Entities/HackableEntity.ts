import SelectableEntity from './SelectableEntity'
import Vector2 from 'System/Vector2'
import IMinigame from 'Minigames/IMinigame'

export default abstract class HackeableEntity extends SelectableEntity {

    // Fields

    protected isHacked: boolean = false;
    protected minigame: IMinigame;

    // Constructors

    constructor(position: Vector2, name: string, minigame: IMinigame) {
        super(position, name);

        this.minigame = minigame;
        minigame.setEntity(this);
    }

    // Methods

    public isEntityHacked(): boolean {
        return this.isHacked;
    }

    public getMinigame(): IMinigame {
        return this.minigame;
    }

    public setHacked(): void {
        this.isHacked = true;
    }

}