const minesweeper = require("../minesweep")

const emptyTable = "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n";
const startMessage = " [Minesweeper 3x3] Game Created";

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
        it('and has a start message', function() {
            let result = minesweeper();
            expect(result).toContain(startMessage);
        });
    });
});