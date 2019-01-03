import Screen from 'Screens/Screen'
import Vector2 from './Vector2'
import MainScreen from 'Screens/MainScreen'
import Renderer from './Renderer'
import HelpScreen from 'Screens/HelpScreen'
import Level from 'LevelSystem/Level'
import Level01 from 'LevelSystem/Level01';
import Constants from './Constants';

export default class Game {

    // Fields

    private isStarted = false;

    private gameWidth: number;
    private gameHeight: number;

    private canvas: HTMLCanvasElement;
    private renderer: Renderer;

    private step: number;
    private lastTime: number;
    private deltaTime: number;

    private screens: Screen[] = [];
    public currentLevel: Level;

    // Constructors

    constructor() {
        // Initialize screens
        const mainScreen = new MainScreen(this);
        const helpScreen = new HelpScreen(this);
        this.screens.push(mainScreen);
        this.screens.push(helpScreen);

        // Initialize canvas + renderer
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        const canvasContext = this.canvas.getContext('2d');
        this.renderer = new Renderer(canvasContext);

        this.step = 1 / Constants.fps;
        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;

        this.frame = this.frame.bind(this);
        this.onCanvasClick = this.onCanvasClick.bind(this);
    }

    // Methods

    public startGame() {
        if (this.isStarted)
            return;

        // Load first level 
        const firstLevel = new Level01();
        this.loadLevel(firstLevel);

        this.isStarted = true;

        // Initialize event handler
        this.canvas.addEventListener('click', this.onCanvasClick);

        // Start update & render methods
        this.frame();
    }

    public loadLevel(level: Level) {
        console.log(`Loading level "${level.name}"...`)

        this.currentLevel = level;
        this.screens.forEach(screen => screen.loadLevel(level));

        console.log("Level loaded.")
    }

    // Event handler

    private onCanvasClick(event) {
        const clickPosition = new Vector2(event.x, event.y);

        this.screens.forEach(screen => {
            if (clickPosition.isInsideRectangle(screen.startPoint, screen.endPoint))
                screen.handleClick(clickPosition);
        });
    }

    // Game loop

    private frame() {
        const now = this.timestamp();
        this.deltaTime += Math.min(1, (now - this.lastTime) / 1000);

        while (this.deltaTime > this.step) {
            this.deltaTime -= this.step;
            this.update();
        }

        this.render();
        this.lastTime = now;
        requestAnimationFrame(this.frame);
    }

    private timestamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }

    private update() {
        this.screens.forEach(screen => screen.update());
    }

    private render() {
        this.renderer.clearRect(0, 0, this.gameWidth, this.gameHeight);

        // Render each screen and their sub entites
        this.screens.forEach(screen => screen.render(this.renderer));
    }
}