const Minesweeper = require("../minesweep")

const emptyTable = "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n";
const startMessage = " [Minesweeper 3x3] Game Created";



describe('Minesweeper game should...', function() {
    describe('start with...', function() {
        it('a displayed output', function() {
            let minesweep = new Minesweeper();
            let result = minesweep.init();
            expect(result).not.toBeNull();
        });
        it('which is an empty table', function() {
            let minesweep = new Minesweeper();
            let result = minesweep.init();
            expect(result).toContain(emptyTable);
        });
        it('and has a start message', function() {
            let minesweep = new Minesweeper();
            let result = minesweep.init();
            expect(result).toContain(startMessage);
        });
    });
    describe('support user(bot) movements, so ...', function() {
        it('steps can be made by the user(bot)', function() {
            let minesweep = new Minesweeper();
            let result = minesweep.step(1,1);
            expect(result).not.toBeNull();
        });
        it('bombs should be set by a bot, 3rd party logic', function() {
            let bombTable = [
                [" ", " ", " "],
                [" ", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            let result = minesweep.setBombs(bombTable);
            expect(result).not.toBeNull();
        });
    });
});