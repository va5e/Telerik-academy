/* Scrooge McDuck
Description
Scrooge McDuck likes his treasure very much. That is why he likes to play a funny game.

He builds a labyrinth of coins and tries to escape from it. You can think of the labyrinth as a rectangular field. Each cell of the field contains 0 or more coins.

When Scrooge McDuck steps on a cell, he can take only a single coin from this cell, and only if there are any coins. Scrooge McDuck can escape the field, only if he is surrounded by empty cells.

Scrooge McDuck always wants to go to the neighbouring cell with most coins. BUT if there are more than one cells with the same amount of coins (the largest), he chooses a cell (always the largest) from the order left, right, up, down

If Scrooge McDuck cannot go in any direction, he is out of the labyrinth

Examples

Scrooge McDuck is worried, not about his life, but if the coins he collect will be enough. Your task is to tell him how many coins he will collect, following the rules above.

Input
Read from the standard input
On the first line find N and M
The size of the labyrinth
On the next N lines find M integer values, separated by a space
The input data will always be valid and there is no need to check it explicitly
The starting location of Scrooge McDuck will be marked as the only 0
Output
Print to the standard output
On the single line, print the number of coins Scrooge McDuck can collect, following the rules
Contraints
2 <= N <= 10
2 <= M <= 10
Each cell can contain up to 1024 coins
*/

let input = [
    '4 3',
    '3 15 4',
    '10 20 9',
    '12 0 100',
    '2 22 8',

    // '3 3',
    // '10 10 0',
    // '10 10 10',
    // '10 10 10'

    // '2 3',
    // '0 5 2',
    // '2 5 3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let rowsAndCols = gets().split(' ').map(Number)
let rows = rowsAndCols[0];
let cols = rowsAndCols[1];
let curRow;
let curCol;
let matrix = Array.from({
    length: rows
})
for (let i = 0; i < rows; i++) {
    matrix[i] = [...(gets().split(' ').map(Number))]
}

for (let i = 0; i < rows; i++) {
    if (matrix[i].includes(0)) {
        curRow = i
        curCol = matrix[i].indexOf(0);
    }
}

console.log(curRow, curCol)

let curPos = matrix[curRow][curCol];
let leftPos = matrix[curRow][curCol - 1];
let rightPos = matrix[curRow][curCol + 1];
let upPos = matrix[curRow - 1][curCol];
let downPos = matrix[curRow + 1][curCol];




while (true) {

    if (rightPos && rightPos > leftPos && rightPos > upPos && rightPos > downPos) {
        ++curCol
        matrix[curRow][curCol + 1] = matrix[curRow][curCol + 1] - 1
    } else if (leftPos && leftPos > rightPos && leftPos > upPos && leftPos > downPos) {
        --curCol
        matrix[curRow][curCol - 1] = matrix[curRow][curCol - 1] - 1
    } else if (upPos && upPos > rightPos && upPos > leftPos && upPos > downPos) {
        --curRow
        matrix[curRow - 1][curCol] = matrix[curRow - 1][curCol] - 1
    } else if (downPos && downPos > rightPos && downPos > upPos && downPos > leftPos) {
        ++curRow
        matrix[curRow + 1][curCol] = matrix[curRow + 1][curCol] - 1
    }


}