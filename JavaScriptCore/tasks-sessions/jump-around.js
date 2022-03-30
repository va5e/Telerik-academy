/*
Jump Around
Description
Pesho is a funny cangaroo. He wants to jump around all day and night. Yet his mom is not so happy about that, she doesn't let him out. Of course Pesho tried many times to escape, but his mother used to be the National Cangaroo jump champion, so she can jump faster and higher than him. Still she is not that smart, so Pesho decided that he can trick her by jumping using a sequence of jumps.

Your task is to calculate if Pesho can escape from his mother, using the given sequence of jumps.

You are given a field of size N x M where the values are as follows: On the first row the numbers are from 1 to M, on the second row – from M+1 to 2*M, on the third – from 2*M +1 to 3*M, etc…

By given position in the field, and using the patterns given, calculate if Pesho can escape from his mother.

Examples

You are also given a sequence of jumps over the field. The jumps are described with change to the row and column, i.e. when on position (R, C) with jump (-2, 3), Pesho will go to position (R-2, C+3).
When the sequence of jumps is over, Pesho must start the same sequence again.

If Pesho goes outside the field, he has escaped, if Pesho goes to a previously visited position, he is caught.

Input
Read from the standard input

On the first line, find the numbers N, M and J. (J is number of jumps)
On the second line, find the start position, R and C
On the next J lines, find the jumps
Output
Print on the standard output

On the single line, print
"escaped SUM_OF_NUMBERS", if Pesho escapes his mother
"caught NUMBER_OF_JUMPS", if Pesho is caught
Constraints
N and M will always be between 1 and 500
J will be between 1 and 1000
*/
     
// const n = 6;
// const m = 7;
 
// const jumps = [[2, 2], [-2, 2], [3, -1]];
 
// const matrix = [];
// for (let i = 0; i < n; ++i) {
//     matrix[i] = [];
//     for (let j = 0; j < m; ++j) {
//         matrix[i][j] = i * m + j + 1;
//     }
// }
 
// let hasEscaped = false, isCaught = false, sumVisited = 1;
// let startCell = [0, 0];
// const visitedCells = [];
// while (true) {
//     let numberJumps = 0;
//     for (let [x1, y1] of jumps) {
//         numberJumps++;
//         const nx = startCell[0] + x1;
//         const ny = startCell[1] + y1;
//         if (nx >= n || nx < 0 || ny >= m || ny < 0) {
//             hasEscaped = true;
//             break;
//         }
 
//         if (visitedCells.find(([x, y]) => nx === x && ny === y)) {
//             console.log('caught', numberJumps);
//         }
 
//         sumVisited += matrix[nx][ny];
//         visitedCells.push([startCell]);
//         startCell = [nx, ny];
//     }
 
//     if (hasEscaped) {
//         console.log('escaped', sumVisited);
//         break;
//     }
// }

let input = [
    '6 7 3',
'0 0',
'2 2',
'-2 2',
'3 -1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const line1 = gets().split(' ').map(Number);
const rows = line1[0];
const cols = line1[1];
const countJumps = line1[2];
const line2 = gets().split(' ').map(Number);
let curRow = line2[0];
let curCol = line2[1];
let arrMoves = []

for(let i = 0; i < countJumps;i++){
arrMoves.push(gets().split(' ').map(Number))
}

let index = 1;
let matrix = [];
let jumps = 0;
let arrCollected = [];
let sumOfCollected = 0;

for(let i = 0; i<rows;i++){
    matrix[i]=[]
    for(let j = 0; j<cols;j++){
        matrix[i][j]=index++
    }
}
let counter = 0

outer:
while(true){

    if(curRow< 0 || curCol< 0 || curRow >= rows || curCol>= cols){
            jumps++
            print(`escaped ${sumOfCollected}`)
            break outer;
        }else if(arrCollected.includes(matrix[curRow][curCol])){
            jumps++
            print(`caught ${jumps}`)
            break outer;
        }else{
            arrCollected.push(matrix[curRow][curCol]);
            sumOfCollected +=matrix[curRow][curCol]
            jumps++;
            curRow = curRow + arrMoves[counter][0]
            curCol = curCol + arrMoves[counter][1]
        }
    
        if(counter < arrMoves.length-1){
        counter++
    }else{
        counter = 0;
    }
}

