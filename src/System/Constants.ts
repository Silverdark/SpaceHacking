export default {
    fps: 60,
    tileSize: 32,

    mainScreen: {
        backgroundColor: "#FFFFFF",
        topLeftX: 61,
        topLeftY: 183,
        rightBottomX: 1085,
        rightBottomY: 951
    },

    helpScreen: {
        backgroundColor: "#222222",
        font: "24px Courier New",
        fontColor: "#00FF00",
        topLeftX: 1137,
        topLeftY: 75,
        rightBottomX: 1857,
        rightBottomY: 555
    },

    level: {
        startX: 340,
        startY: 60,
        entityPadding: 5
    },

    entities: {
        selectedStrokeStyle: "#FF0000",
        wall: {
            backgroundColor: "#383838"
        },
        accessPoint: {
            backgroundColor: "#0043FF"
        }
    }
}