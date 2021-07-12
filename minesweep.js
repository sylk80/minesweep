const minesweeper = () => {
    const cellStart = "|"
    const userTable = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]

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
        return "+-+-+-+\n"
    }

    const addCellEnding = (indexX) => {
        return indexX < 2 ? cellStart : cellStart + "\n"
    }

    return drawUserTable(userTable)
}

module.exports = minesweeper
