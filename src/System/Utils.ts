export default class Utils {

    // Methods

    public static getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static addHexNumber(hex1: string, hex2: string): string {
        return (parseInt(hex1, 16) + parseInt(hex2, 16)).toString(16);
    }

    public static replaceAt(original: string, index: number, replacement: string): string {
        return original.substr(0, index) + replacement + original.substr(index + replacement.length);
    }
}