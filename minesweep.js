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
        this.validateStep(this.MARK)
        let result = this.drawUserTable(this.userTable)
        result = this.addFooter(result)
        console.log(result)
        return result
    }

    setBombs(bombTable) {
        this.bombTable = bombTable
        return this.bombTable
    }

    validateStep(cellValue) {
        if (cellValue === this.BOMB) {
            this.messageStart = " [Minesweeper 3x3] BOOM!  - Game Over"
        } else {
            this.setNonFinishingStatus(cellValue)
        }
    }

    setNonFinishingStatus(cellValue) {
        if (
            this.checkEnding() &&
            this.checkVictory(this.userTable, this.bombTable)
        ) {
            this.messageStart =
                " [Minesweeper 3x3] the land is cleared! GOOD JOB!"
        } else {
            this.setStatusBasedOnValue(cellValue)
        }
    }

    setStatusBasedOnValue(cellValue) {
        if (cellValue === this.MARK) {
            this.messageStart = " [Minesweeper 3x3] Square flagged as bomb"
        } else {
            this.messageStart =
                " [Minesweeper 3x3] " + cellValue + " bombs around your square"
        }
    }

    checkEnding() {
        let finished = true
        for (let indexY = 0; indexY < 2; indexY++) {
            if (!this.checkRowEnding(indexY)) {
                finished = false
                break
            }
        }
        return finished
    }

    checkRowEnding(indexY) {
        let rowFinished = true
        for (let indexX = 0; indexX < 3; indexX++) {
            if (this.userTable[indexY][indexX] === " ") {
                rowFinished = false
                break
            }
        }
        return rowFinished
    }

    checkVictory(userTable, bombTable) {
        let sameValues = true
        for (let indexY = 0; indexY < 3; indexY++) {
            if (!this.checkRowsForSameValues(userTable, bombTable, indexY)) {
                sameValues = false
                break
            }
        }
        return sameValues
    }

    checkRowsForSameValues(userTable, bombTable, indexY) {
        let sameValuesInRows = true
        for (let indexX = 0; indexX < 3; indexX++) {
            if (
                !this.checkCellForSameValue(
                    userTable[indexY][indexX],
                    bombTable[indexY][indexX]
                )
            ) {
                sameValuesInRows = false
                break
            }
        }
        return sameValuesInRows
    }

    checkCellForSameValue(userCell, bombCell) {
        return (
            userCell !== " " &&
            (userCell === bombCell || userCell.replace("*", "X") === bombCell)
        )
    }

    addFooter(result) {
        result += this.NEW_ROW
        result += this.messageStart
        return result
    }
}

module.exports = Minesweeper
