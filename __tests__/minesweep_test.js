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
        it('changes caused by steps should work', function() {
            let bombTable = [
                [" ", " ", " "],
                [" ", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            let result = minesweep.step(1,1);
            expect(result).toContain("X");
        });
        it('game over message should be shown', function() {
            let bombTable = [
                [" ", " ", " "],
                [" ", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            let result = minesweep.step(1,1);
            expect(result).toContain(" [Minesweeper 3x3] BOOM!  - Game Over");
        });
    });
    describe('support user(bot) bomb discovery, so ...', function() {
        it('number of bombs are shown when the user(bot) click on a field with numbers', function() {
            let bombTable = [
                ["3", "X", " "],
                ["X", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            let result = minesweep.step(0,0);
            expect(result).not.toContain('X');
        });
        it('number of bombs are shown when the user(bot) click on a field with numbers', function() {
            let bombTable = [
                ["3", "X", " "],
                ["X", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            let result = minesweep.step(0,0);
            expect(result).toContain('3');
        });
        it('warning should be displayed in status field about number of bombs', function() {
            let bombTable = [
                ["3", "X", " "],
                ["X", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            let result = minesweep.step(0,0);
            expect(result).toContain("3 bombs around your square");
        });
    });
    describe('support user(bot) bomb avoiding strategy, so ...', function() {
        it('bomb marking should be made available to user ', function() {
            let bombTable = [
                ["3", "X", " "],
                ["X", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            minesweep.step(0,0);
            let result = minesweep.mark(1,0);
            expect(result).not.toBeNull();
        });
        it('bomb markings should be made by usershould be shown ', function() {
            let bombTable = [
                ["3", "X", " "],
                ["X", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            minesweep.step(0,0);
            minesweep.mark(1,0);
            minesweep.mark(0,1);
            let result = minesweep.mark(1,1)
            expect(result).toContain("+-+-+-+\n|3|*| |\n+-+-+-+\n|*|*| |\n+-+-+-+\n| | | |\n+-+-+-+\n");
        });
        it('bomb warning should be made displayed after marking was done ', function() {
            let bombTable = [
                ["3", "X", " "],
                ["X", "X", " "],
                [" ", " ", " "],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            minesweep.step(0,0);
            let result = minesweep.mark(1,0);
            expect(result).toContain("Square flagged as bomb");
        });
    });
    describe('support user\'s(bot) victory, so that ...', function() {
        it('by clearing not discovered, non marked fields ', function() {
            let bombTable = [
                ["3", "X", "2"],
                ["X", "X", "2"],
                ["2", "2", "1"],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            minesweep.step(0,0);
            minesweep.mark(1,0);
            minesweep.mark(0,1);
            minesweep.mark(1,1);
            let result = minesweep.step(2,0);
            expect(result).toContain(2);
        });
        it('all numbers could be cleared next to non marked fields ', function() {
            let bombTable = [
                ["3", "X", "2"],
                ["X", "X", "2"],
                ["2", "2", "1"],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            minesweep.step(0,0);
            minesweep.mark(1,0);
            minesweep.mark(0,1);
            minesweep.mark(1,1);
            minesweep.step(2,0);
            minesweep.step(2,1);
            minesweep.step(2,2);
            minesweep.step(0,2);
            let result = minesweep.step(1,2);
            expect(result).not.toContain("X");
        });
        it('after all numbers were cleared properly a congratulations should be shown ', function() {
            let bombTable = [
                ["3", "X", "2"],
                ["X", "X", "2"],
                ["2", "2", "1"],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            minesweep.step(0,0);
            minesweep.mark(1,0);
            minesweep.mark(0,1);
            minesweep.mark(1,1);
            minesweep.step(2,0);
            minesweep.step(2,1);
            minesweep.step(2,2);
            minesweep.step(0,2);
            let result = minesweep.step(1,2);
            expect(result).toContain("the land is cleared! GOOD JOB!");
        });
    });
    describe('support the discovery of empty fields,so  ...', function() {
        it('when empty fields are clicked ', function() {
            let bombTable = [
                ["_", "1", "X"],
                ["_", "1", "1"],
                ["_", "_", "_"],
            ]
            let minesweep = new Minesweeper();
            minesweep.setBombs(bombTable);
            let result = minesweep.step(0,0);
            expect(result).toContain('_');
        });
    });
});