class Minesweeper {
    constructor() {
        this.cellStart = "|"
        this.userTable = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]
        this.bombTable = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]
        this.messageStart = " [Minesweeper 3x3] Game Created"
        this.NEW_ROW = "\n"
    }

    drawUserTable(table) {
        let drawnTable = this.addNewRow()
        for (let indexY = 0; indexY < 3; indexY++) {
            drawnTable = this.drawRows(table, indexY, drawnTable)
        }
        return drawnTable
    }

    drawRows(table, indexY, drawnTable) {
        drawnTable += this.cellStart
        for (let indexX = 0; indexX < 3; indexX++) {
            drawnTable += table[indexY][indexX]
            drawnTable += this.addCellEnding(indexX)
        }
        drawnTable += this.addNewRow()
        return drawnTable
    }

    addNewRow() {
        return "+-+-+-+" + this.NEW_ROW
    }

    addCellEnding(indexX) {
        return indexX < 2 ? this.cellStart : this.cellStart + this.NEW_ROW
    }

    init() {
        let result = this.drawUserTable(this.userTable)
        result += this.NEW_ROW
        result += this.messageStart
        console.log(result)
        return result
    }

    step(stepX, stepY) {
        this.userTable[stepY][stepY] = "*"
        const result = this.drawUserTable(this.userTable)
        console.log(result)
        return result
    }

    setBombs(bombTable) {
        this.bombTable = bombTable
        return this.bombTable
    }
}

module.exports = Minesweeper
