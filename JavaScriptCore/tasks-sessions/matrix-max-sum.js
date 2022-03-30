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

const rows = Number(gets());
const matrix = [];

for (let i = 0; i < rows; i++) {
  matrix[i] = gets().split(' ').map(Number);
}

const cols = matrix[0].length;

const coords = gets().split(' ').map(Number);
let maxSum = Number.MIN_SAFE_INTEGER;

while (coords.length > 0) {
  const r = coords.shift();
  const c = coords.shift();

  let tempSum = 0;

  if (r > 0) {
    for (let i = 0; i < Math.abs(c); i++) {
      tempSum += matrix[r - 1][i];
    }
  }
  if (r < 0) {
    for (let i = cols - 1; i >= Math.abs(c) - 1; i--) {
      tempSum += matrix[-r - 1][i];
    }
  }
  if (c > 0) {
    for (let i = Math.abs(r) - 2; i >= 0; i--) {
      tempSum += matrix[i][c - 1];
    }
  }
  if (c < 0) {
    for (let i = Math.abs(r); i < rows; i++) {
      tempSum += matrix[i][-c - 1];
    }
  }
  maxSum = Math.max(maxSum, tempSum);
}
print(maxSum);
