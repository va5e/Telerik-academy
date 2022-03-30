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
  '3 3',
  '10 10 0',
  '10 10 10',
  '10 10 10'
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

let leftPos; 
let rightPos;
let upPos; 
let downPos; 
let coins = 0;

while(true){
  
  if(curCol-1 < 0){
    leftPos = 0;
  }else{
    leftPos = matrix[curRow][curCol - 1]
  }
  if(curCol+1 === cols){
    rightPos = 0;
  }else{
    rightPos = matrix[curRow][curCol + 1]
  }
   if(curRow + 1 === rows){
    downPos = 0;
  }else{
    downPos = matrix[curRow + 1][curCol]
  }
   if(curRow -1 < 0){
    upPos = 0;
  }else{
    upPos = matrix[curRow - 1][curCol]
  }

  if(leftPos >= Math.max(rightPos,downPos,upPos)){
    if(leftPos===0){
      break;
    }
    matrix[curRow][curCol-1]--
    curCol--
    coins++
  } else if(rightPos >= Math.max(leftPos,downPos,upPos)){
    if(rightPos===0){
      break;
    }
    matrix[curRow][curCol+1]--
    curCol++
    coins++
  }else if(upPos >= Math.max(rightPos,leftPos,downPos)){
    if(upPos===0){
      break;
    }
    matrix[curRow-1][curCol]--
    curRow--
    coins++
  }else if(downPos >= Math.max(rightPos,upPos,leftPos)){
    if(downPos===0){
      break;
    }
    matrix[curRow+1][curCol]--
    curRow++
    coins++
  }
}
console.log(coins)






////////

const n = 4;
const m = 3;
 
const matrix = [
    [3, 2, 4],
    [2, 0, 3],
    [1, 1, 5],
    [2, 2, 5],
];
 
let startPos = [1, 1];
let coinSum = 0;
 
while (true) {
    const [x, y] = startPos;
    const neighbors = [[0, -1], [0, 1], [-1, 0], [1, 0]].map(
        ([dx, dy]) => [x + dx, y + dy]
    ).filter(([nx, ny]) => nx >= 0 && nx < n && ny >= 0 && ny < m);
 
    let maxNeighbor = neighbors[0];
    neighbors.shift();
    for (const [x2, y2] of neighbors) {
        const [x1, y1] = maxNeighbor;
        if (matrix[x2][y2] > matrix[x1][y1]) {
            maxNeighbor = [x2, y2];
        }
    }
 
    const [x1, y1] = maxNeighbor;
    if (matrix[x1][y1] === 0) {
        console.log(coinSum);
        break;
    }
 
    coinSum++;
    matrix[x1][y1]--;
    startPos = [x1, y1];
}