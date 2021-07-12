[![Build Status](https://travis-ci.com/sylk80/minesweep.svg?branch=main)](https://travis-ci.com/sylk80/minesweep)[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sylk80_minesweep&metric=alert_status)](https://sonarcloud.io/dashboard?id=sylk80_minesweep)[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sylk80_minesweep&metric=coverage)](https://sonarcloud.io/dashboard?id=sylk80_minesweep)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sylk80_minesweep&metric=bugs)](https://sonarcloud.io/dashboard?id=sylk80_minesweep)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sylk80_minesweep&metric=code_smells)](https://sonarcloud.io/dashboard?id=sylk80_minesweep)

:heavy_check_mark: / :green_circle: - green test
:x: / :red_circle: - failing test
:dart: - goal
:heavy_plus_sign: - items
:hammer_and_pick: - refactor
:warning: - Techdebt

### Description

Mine Sweeper - Game Rules:
You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step
on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any
bombs) you win.
Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs.
If you guess a square contains a bomb mark it with a flag.
A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the
sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you
clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively.
The first square you open could be a bomb.
You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

### User Scenario 1

:radio_button: As a game user

:arrow_right: I want a clean board created at the beginning of the game

:arrow_left: So that I can play mine sweeper

### User acceptance test 1

:heavy_plus_sign: Given no actual input from the user

:construction: When the minesweeper game starts

:heavy_exclamation_mark: Then an empty board is created with a start message

### Unit tests

:heavy_plus_sign: Output should be displayed :x: :heavy_check_mark:

:heavy_plus_sign: Table should be empty in content :x: :heavy_check_mark:

:heavy_plus_sign: A start message has to be added :x: :heavy_check_mark:

---

### User Scenario 2

:radio_button: As a game user(bot)

:arrow_right: I want the bomb, and a message shown when I step directly on the bomb as first step

:arrow_left: So that the game can end with my defeat

### User acceptance test 2

:heavy_plus_sign: Given a bomb hidden in the middle field

:construction: When the user clicks on the particular field

:heavy_exclamation_mark: Then a bomb, and the game over message is shown

### Unit tests 2

:heavy_plus_sign: Steps should be available :x: :heavy_check_mark: :hammer_and_pick:

:heavy_plus_sign: Bomb setting should be available :x: :heavy_check_mark:

:heavy_plus_sign: Changes caused by step should work :x: :heavy_check_mark:

:heavy_plus_sign: Bomb should be displayed :warning:

:heavy_plus_sign: A game over message has to be added :x: :heavy_check_mark:

---

### User Scenario 3

:radio_button: As a game user(bot)

:arrow_right: I want the to see the number of bombs if I step on a field, which contains no bombs

:arrow_left: So that I could mark the bombs according to the number

### User acceptance test 3

:heavy_plus_sign: Given three bomb around the [0,0] corner

:construction: When the user clicks on the particular [0,0] corner

:heavy_exclamation_mark: Then the number 3 is shown, and the game goes on

### Unit tests 3

:heavy_plus_sign: Bomb numbers should be available :heavy_check_mark:

:heavy_plus_sign: Numbers should be shown :heavy_check_mark:

:heavy_plus_sign: a warning should be displayed in status field :x: :heavy_check_mark:

---

### User Scenario 4

:radio_button: As a game user(bot)

:arrow_right: I want the to mark the bombs around a field, which contains a number only

:arrow_left: So that I would avoid those fields later

### User acceptance test 4

:heavy_plus_sign: Given a discovered and displayed number in corner

:construction: When the user wants to marks the fields around particular corner

:heavy_exclamation_mark: Then the fields should be marked as bombs, nothing else should happen

### Unit tests 4

:heavy_plus_sign: Marking should be available :x: :heavy_check_mark:

:heavy_plus_sign: Markings should be shown :heavy_check_mark:

:heavy_plus_sign: Marking should be noted in the status field x:

### Technical Debts

:warning: We are working with 3x3 table, table size should be an input
