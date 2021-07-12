const minesweeper = require("../minesweep")

describe('Minesweeper game should...', function() {
    describe('start with...', function() {
        it('a displayed output', function() {
            let result = minesweeper();
            expect(result).not.toBeNull();
        });
    });
});