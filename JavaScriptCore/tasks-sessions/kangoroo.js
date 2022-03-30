
     
const n = 6;
const m = 7;
 
const jumps = [[2, 2], [-2, 2], [3, -1]];
 
const matrix = [];
for (let i = 0; i < n; ++i) {
    matrix[i] = [];
    for (let j = 0; j < m; ++j) {
        matrix[i][j] = i * m + j + 1;
    }
}
 
let hasEscaped = false, isCaught = false, sumVisited = 1;
let startCell = [0, 0];
const visitedCells = [];
while (true) {
    let numberJumps = 0;
    for (let [x1, y1] of jumps) {
        numberJumps++;
        const nx = startCell[0] + x1;
        const ny = startCell[1] + y1;
        if (nx >= n || nx < 0 || ny >= m || ny < 0) {
            hasEscaped = true;
            break;
        }
 
        if (visitedCells.find(([x, y]) => nx === x && ny === y)) {
            console.log('caught', numberJumps);
        }
 
        sumVisited += matrix[nx][ny];
        visitedCells.push([startCell]);
        startCell = [nx, ny];
    }
 
    if (hasEscaped) {
        console.log('escaped', sumVisited);
        break;
    }
}