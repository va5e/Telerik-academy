/*
Matrix Max Sum
Description
Write a program that finds the maximum sum between two given coordinates in a matrix. The coordinates are provided as a list of pairs, such as 2 3 -4 -2 where 2 3 is the first pair and -4 -2 is the next one. The first number of the pair is the row coordinate R and the second one is the column coordinate C.

You need to follow a path from R to C and sum up all the values you encounter in cells. For example, with coordinates 2 3 you start from the beginning of the 2nd row and move towards the 3rd column. When you reach the column, you go up because the column coordinate 3 is positive.

With coordinates -4 -2 you start from the end of the 4th row (because -4 is negative) and move towards the 2nd column. When you reach it, you go down (-2 is negative).

Check the following picture for a clearer idea.

table

The path 2 3 yields a sum of 17 which is higher than the sum you obtain by following -4 -2 (15)

Print the maximum sum you find to the standard output.

Note
You always have to move horizontally in rows and vertically in columns. For example, in the above picture, the correct path with coordinates -4 -2 is 3 -> 2 -> 5 -> 3 -> 2 and NOT 3 -> 4 -> 3 -> 6 -> 2.

Input
On the first line, you receive an integer N - the number of rows in the matrix
On the next N lines, each row of the matrix is given, with columns separated by a space
On the last line, the R and C coordinates are given, separated by spaces
Output
On the only line of output, print the maximum sum found.
Constraints
N will be an integer between 5 and 20, inclusive.
All rows have the exact same length, also between 5 and 20, inclusive.
The R and C coordinates will always be valid and inside the matrix.
The R C pairs will be at least 1 and no more than 20.
Matrix elements will have values in range -5000 and 5000.
*/

let matrix = [];
let index = 1;
let sum = 0;
let sumArr = []
const coordinates = [1, 2, -2, 3, 4, -1]

for (let i = 0; i < 5; i++) {
    matrix[i] = []
    for (let j = 0; j < 5; j++) {
        matrix[i][j] = index++
    }
}

while (coordinates.length != 0) {

    let rowCord = coordinates[0];
    let colCord = coordinates[1];
    let row = Math.abs(rowCord) - 1;
    let col = Math.abs(colCord) - 1;

    if (rowCord < 0 && colCord > 0) {
        for (let i = matrix[row].length - 1; i >= col; i--) {
            sum += matrix[row][i]
        }
        for (let i = row - 1; i >= 0; i--) {
            sum += matrix[i][col]
        }
        sumArr.push(sum);
        sum = 0;
    }

    if (rowCord < 0 && colCord < 0) {
        for (let i = matrix[row].length - 1; i >= col; i--) {
            sum += matrix[row][i]
        }
        for (let i = row + 1; i <= matrix[0].length - 1; i++) {
            sum += matrix[i][col]
        }
        sumArr.push(sum);
        sum = 0;
    }

    if (rowCord > 0 && colCord > 0) {
        for (let i = col; i >= 0; i--) {
            sum += matrix[row][i]
        }
        for (let i = row - 1; i >= 0; i--) {
            sum += matrix[i][col]
        }
        sumArr.push(sum);
        sum = 0;
    }

    if (rowCord > 0 && colCord < 0) {
        for (let i = col; i >= 0; i--) {
            sum += matrix[row][i]
        }

        for (let i = row + 1; i <= matrix[0].length - 1; i++) {
            sum += matrix[i][col]
        }
        sumArr.push(sum);
        sum = 0;
    }
    coordinates.shift()
    coordinates.shift()
}
console.log(Math.max(...sumArr))


//This could be made with biggestSum variable , so there will be no extra array for storing all sum values and the program will be faster.
