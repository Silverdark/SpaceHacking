import Vector2 from 'System/Vector2'
import Renderer from 'System/Renderer'
import HackeableEntity from 'Entities/HackableEntity'

export default interface IMinigame {
    setEntity(entity: HackeableEntity): void;
    render(renderer: Renderer, originPoint: Vector2): void;
    handleClick(position: Vector2): void;
}