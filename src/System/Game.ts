import Screen from 'Screens/Screen'
import Vector2 from './Vector2'
import MainScreen from 'Screens/MainScreen'
import Renderer from './Renderer'
import HelpScreen from 'Screens/HelpScreen'

export default class Game {

    // Fields

    private screens: Screen[] = [];

    private gameWidth: number;
    private gameHeight: number;

    private canvas: HTMLCanvasElement;
    private renderer: Renderer;

    private fps = 60;
    private step = 1 / this.fps;
    private lastTime: number;
    private deltaTime: number;

    // Constructors

    constructor() {

        // Initialize screens
        const mainScreen = new MainScreen();
        const helpScreen = new HelpScreen();
        this.screens.push(mainScreen);
        this.screens.push(helpScreen);

        // Initialize canvas + renderer
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        const canvasContext = this.canvas.getContext('2d');
        this.renderer = new Renderer(canvasContext);

        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;

        this.frame = this.frame.bind(this);
        this.onCanvasClick = this.onCanvasClick.bind(this);
    }

    // Methods

    startGame() {
        // Initialize event handler
        this.canvas.addEventListener('click', this.onCanvasClick);

        // Start update & render methods
        this.frame();
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

    // Event handler

    private onCanvasClick(event) {
        const clickPosition = new Vector2(event.x, event.y);

        this.screens.forEach(screen => {
            if (screen.isInsideScreen(clickPosition))
                screen.handleClick(clickPosition);
        });
    }
}