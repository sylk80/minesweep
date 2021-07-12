const minesweeper = require("../minesweep")

const emptyTable = "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n";

describe('Minesweeper game should...', function() {
    describe('start with...', function() {
        it('a displayed output', function() {
            let result = minesweeper();
            expect(result).not.toBeNull();
        });
        it('which is an empty table', function() {
            let result = minesweeper();
            expect(result).toContain(emptyTable);
        });
    });
});