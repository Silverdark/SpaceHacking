import IMinigame from './IMinigame'
import Renderer from 'System/Renderer'
import Vector2 from 'System/Vector2'
import TextRenderer from 'System/TextRenderer'
import Constants from 'System/Constants'
import Utils from 'System/Utils'
import HackeableEntity from 'Entities/HackableEntity'

export default class FalloutTerminal implements IMinigame {

    // Fields

    private static fourLetterWords = ["SELL", "SHOT", "HURT", "GIVE", "SURE", "GEAR", "SENT", "FIRE", "GLOW", "WEEK", "ONES", "SICK"];
    private static garbageFilling = "'.,;*)#%$-^!\\>][<=+-/?@:";

    private entity: HackeableEntity;

    private correctPassword: string;
    private remainingAttempts: number;

    private lines: string[] = [];
    private wordPositions = [];
    private selectedWords: string[] = [];

    // Constructors

    constructor() {
        this.initializeGame();
    }

    // Methods

    public setEntity(entity: HackeableEntity): void {
        this.entity = entity;
    }

    public render(renderer: Renderer, originPoint: Vector2): void {
        const textOriginPoint = originPoint.add(new Vector2(Constants.minigames.falloutTerminal.textStartX, Constants.minigames.falloutTerminal.textStartY));
        const spacing = 30;

        const textRenderer = new TextRenderer(renderer, textOriginPoint, spacing);

        renderer.setFont(Constants.screens.defaultFont);
        renderer.setFillStyle(Constants.screens.defaultFontColor);

        textRenderer.drawText("Password required");
        textRenderer.addSpacing(24);

        textRenderer.drawText(`Attempts remaining: ${this.remainingAttempts}`);
        textRenderer.addSpacing(24);

        for (let i = 0; i < 16; i++)
            textRenderer.drawText(`0x${Utils.addHexNumber("9430", (i * 12).toString(16))}  ${this.lines[i]}`);

        textRenderer.nextPosition = textOriginPoint.add(new Vector2(350, 24 + spacing + 24 + spacing));
        for (let i = 16; i < 32; i++)
            textRenderer.drawText(`0x${Utils.addHexNumber("9430", (i * 12).toString(16))}  ${this.lines[i]}`);

        textRenderer.nextPosition = textOriginPoint.add(new Vector2(700, 24 + spacing + 24 + spacing));

        for (let selectedWord of this.selectedWords) {
            const isCorrectPassword = this.correctPassword === selectedWord;

            textRenderer.drawText(`> ${selectedWord}`);
            textRenderer.drawText(`> ${isCorrectPassword ? "Access granted" : "Entry denied"}`);

            if (!isCorrectPassword)
                textRenderer.drawText(`> Likeness=${this.getLikeness(selectedWord)}`);
        }
    }

    public handleClick(position: Vector2): void {
        const testPosition = position.substract(new Vector2(Constants.minigames.falloutTerminal.textStartX + 115, Constants.minigames.falloutTerminal.textStartY + 4 * 24));

        if (!testPosition.isPositive() ||
            (testPosition.x > 170 && testPosition.x < 352) || // Space between first and second row
            testPosition.x > 522 || // Space after second row
            testPosition.y > 470) // After the table
            return;

        const selectedLineRaw = testPosition.y / (15 + 15);
        let selectedLine = selectedLineRaw - Math.floor(selectedLineRaw) < 0.5 ? parseInt(selectedLineRaw.toFixed(0)) : -1;

        if (selectedLine === -1)
            return;

        let charPosition = testPosition.x;
        if (testPosition.x >= 352) { // Second row
            selectedLine += 16;
            charPosition -= 352;
        }

        const selectedChar = Math.floor(charPosition / 14.5);
        let selectedWord = "";

        for (let wordPosition of this.wordPositions) {
            if (wordPosition.position.y != selectedLine)
                continue;

            if (selectedChar < wordPosition.position.x || selectedChar > wordPosition.position.x + 3)
                continue;

            selectedWord = wordPosition.word;
        }

        if (selectedWord === "")
            return;

        this.selectedWords.unshift(selectedWord);

        if (selectedWord === this.correctPassword) {
            this.entity.setHacked();
        } else {
            this.remainingAttempts--;

            if (this.remainingAttempts == 0) {
                this.initializeGame();
            }
        }
    }

    private getLikeness(word: string): number {
        let likeness = 0;

        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === this.correctPassword.charAt(i))
                likeness++;
        }

        return likeness;
    }

    private initializeGame() {
        const randomNumber = Utils.getRandomNumber(0, FalloutTerminal.fourLetterWords.length - 1);
        this.correctPassword = FalloutTerminal.fourLetterWords[randomNumber];

        this.remainingAttempts = 4;
        this.selectedWords = [];

        this.initializeLines();
    }

    private initializeLines(): void {
        const textLines = [];
        const wordLines = [];

        // Fill garbage
        for (let index = 0; index < 32; index++) {

            let textLine = "";

            for (let i = 0; i < 12; i++) {
                const fillingIndex = Utils.getRandomNumber(0, FalloutTerminal.garbageFilling.length - 1);
                textLine += FalloutTerminal.garbageFilling[fillingIndex];
            }

            textLines.push(textLine);
        }

        // Fill words
        for (let word of FalloutTerminal.fourLetterWords) {

            let lineIndex: number;
            do {
                lineIndex = Utils.getRandomNumber(0, 31);
            }
            while (wordLines.indexOf(lineIndex) > -1);
            wordLines.push(lineIndex);

            const charIndex = Utils.getRandomNumber(0, 12 - 4);
            textLines[lineIndex] = Utils.replaceAt(textLines[lineIndex], charIndex, word);

            this.wordPositions.push({
                word: word,
                position: new Vector2(charIndex, lineIndex)
            });
        }

        this.lines = textLines;
    }
}