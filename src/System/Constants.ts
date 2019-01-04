export default {
    fps: 60,
    tileSize: 32,

    screens: {
        defaultFont: "24px Courier New",
        defaultFontColor: "#00FF00"
    },

    mainScreen: {
        backgroundColor: "#222222",
        topLeftX: 61,
        topLeftY: 183,
        rightBottomX: 1085,
        rightBottomY: 951
    },

    helpScreen: {
        backgroundColor: "#222222",
        topLeftX: 1137,
        topLeftY: 75,
        rightBottomX: 1857,
        rightBottomY: 555,
        helpTextStartX: 20,
        helpTextStartY: 80
    },

    level: {
        borderColor: "#FFFFFF",
        startX: 340,
        startY: 60,
        entityPadding: 5,
        elements: 10
    },

    entities: {
        selectedStrokeStyle: "#FFFFFF",
        wall: {
            backgroundColor: "#383838"
        },
        firewall: {
            backgroundColorNotHacked: "#FF0000",
            backgroundColorHacked: "#00FF00"
        }
    },

    minigames: {
        falloutTerminal: {
            textStartX: 50,
            textStartY: 80
        }
    }
}