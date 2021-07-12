const minesweeper = () => {
    const cellStart = "|"
    const userTable = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
    const messageStart = " [Minesweeper 3x3] Game Created"
    const NEW_ROW = "\n"

    const drawUserTable = (table) => {
        let drawnTable = addNewRow()
        for (let indexY = 0; indexY < 3; indexY++) {
            drawnTable = drawRows(table, indexY, drawnTable)
        }
        return drawnTable
    }

    const drawRows = (table, indexY, drawnTable) => {
        drawnTable += cellStart
        for (let indexX = 0; indexX < 3; indexX++) {
            drawnTable += table[indexY][indexX]
            drawnTable += addCellEnding(indexX)
        }
        drawnTable += addNewRow()
        return drawnTable
    }

    const addNewRow = () => {
        return "+-+-+-+" + NEW_ROW
    }

    const addCellEnding = (indexX) => {
        return indexX < 2 ? cellStart : cellStart + NEW_ROW
    }

    const init = () => {
        let result = drawUserTable(userTable)
        result += NEW_ROW
        result += messageStart
        console.log(result)
        return result
    }

    /*    const step = (stepX, stepY) => {
        userTable[stepY][stepY] = "*";
    }*/

    return init()
}

module.exports = minesweeper
