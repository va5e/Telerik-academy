/*
Above the Main Diagonal
Description
You are given a number N. Using it, create a square matrix of numbers, formed by powers of 2 and find the sum of the numbers above the main diagonal, excluding the diagonal itself.

Input
Read from the standard input.

On the first line, read the number N - the number of rows and columns.
Output
Print to the standard output.

On a single line print the sum of the numbers above the main diagonal excluding the diagonal.
Constraints
N can get as big as 30.
Sample tests
Input
4
Output
70
*/

let input = ['4'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let matrixSide = +gets();
let matrix = new Array(matrixSide);
let number = 1;
let aboveMainDiagonalSum = 0;

for (let row = 0; row < matrixSide; row++) {

    matrix[row] = new Array(matrixSide);

    for (let col = 0; col < matrixSide; col++) {
        matrix[row][col] = number;
        number *= 2;
    }
    number = matrix[row][0] * 2;
}

for (let i = 0; i < matrix.length; i++) {

    for (let j = i + 1; j < matrix.length; j++) {
        aboveMainDiagonalSum = BigInt(aboveMainDiagonalSum)
        aboveMainDiagonalSum += BigInt(matrix[i][j]);
    }
}

print(aboveMainDiagonalSum);