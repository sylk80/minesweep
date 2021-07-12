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
        this.BOMB = "X"
        this.MARK = "*"
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
        result = this.addFooter(result)
        console.log(result)
        return result
    }

    step(stepX, stepY) {
        const stepValue = this.bombTable[stepY][stepX]
        this.userTable[stepY][stepX] = stepValue
        let result = this.drawUserTable(this.userTable)
        this.validateStep(stepValue)
        result = this.addFooter(result)
        console.log(result)
        return result
    }

    mark(stepX, stepY) {
        this.userTable[stepY][stepX] = this.MARK
        this.messageStart = " [Minesweeper 3x3] Square flagged as bomb"
        let result = this.drawUserTable(this.userTable)
        result = this.addFooter(result)
        console.log(result)
        return result
    }

    setBombs(bombTable) {
        this.bombTable = bombTable
        return this.bombTable
    }

    validateStep(value) {
        if (value === this.BOMB) {
            this.messageStart = " [Minesweeper 3x3] BOOM!  - Game Over"
        } else {
            this.messageStart =
                " [Minesweeper 3x3] " + value + " bombs around your square"
        }
    }

    addFooter(result) {
        result += this.NEW_ROW
        result += this.messageStart
        return result
    }
}

module.exports = Minesweeper
