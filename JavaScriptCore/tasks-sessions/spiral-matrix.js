/*
Description
Write a program that reads from the console a positive integer number N (1 ≤ N ≤ 20) and prints a matrix holding the numbers from 1 to N*N in the form of square spiral like in the examples below.

Input
The input will always consist of a single line containing a single number - N.
Output
Output a spiral matrix as described below.
Constraints
N will always be a valid integer number.
1 ≤ N ≤ 20
*/

let input = [
    '4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let size = +gets()
let matrix = Array.from({
    length: size
});

for (let i = 0; i < matrix.length; i++) {
    matrix[i] = []
}

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = '*'
    }
}

let startRows = 0;
let endRows = size - 1;
let startCols = 0;
let endCols = size - 1;
let index = 1;

while (startRows <= endRows && startCols <= endCols) {
    for (let col = startCols; col <= endCols; col++) {
        matrix[startRows][col] = index++
    }
    startRows++

    for (let row = startRows; row <= endRows; row++) {
        matrix[row][endCols] = index++;
    }
    endCols--;

    for (let col = endCols; col >= startCols; col--) {
        matrix[endRows][col] = index++;
    }
    endRows--;

    for (let row = endRows; row >= startRows; row--) {
        matrix[row][startCols] = index++;
    }
    startCols++;
}

for (let i = 0; i < size; i++) {
    console.log(matrix[i].join(' '))
}