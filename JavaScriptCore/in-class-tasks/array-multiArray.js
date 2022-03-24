//////////////////columns ascending matrix function

// function columnsMatrix(n){
//   let matrix = [];

//   let index = 1;

//   for(let i = 0; i < n; i++){
//     matrix[i]=[];
// }

//   for(let i = 0; i<n;i++){

//     for(let j = 0; j<n ;j++){
//         matrix[j][i]= index;
//         index++
//     }
// }
// console.table(matrix);
// }
// columnsMatrix(25)

///////////////////Snake matrix

// let row = 4;
// let col = 4;
// let num = 1;
// let matrix = [];

// for(let i = 0; i<row; i++){
//     matrix[i]=[];
// }

//     for(let j = 0; j < col; j++){

//         if(j % 2 === 0){

//             for(let i = 0; i<row; i++){     

//                 matrix[i][j] = num;
//                 num++
//             }
//                 }else{

//             for(let i = row-1; i >= 0; i--){     

//                 matrix[i][j] = num;
//                 num++
//     }
//   }
// }
// console.table(matrix)

////////////////////////////////spiral matrix.

// let rows = 4;
// let cols = 4;

// let matrix = [];

// for(let i = 0; i<rows; i++){
//     matrix[i]=[];
// }

// let firstRow = 0;
// let lastRow = 3;
// let firstCol = 0;
// let lastCol = 3;
// let index= 1;

// for(let i = firstCol; i<=lastCol; i++){
// matrix[i][0]= index;
// index++
// }

// firstCol = 1;

// for( let i = firstCol; i<= lastCol; i++){
// matrix[lastRow][i]= index;
// index++
// }

// lastRow = 2;

// for(let i = lastRow; i >= firstRow; i--){
//     matrix[i][lastCol]= index;
//     index++;
// }

// lastCol = 2;

// for(let i = lastCol; i >= firstCol; i--){
//     matrix[firstRow][i]= index;
//     index++
// }

// firstRow = 1;

// for(let i = firstRow; i <= lastRow; i++){
//     matrix[i][firstCol] = index;
//     index++;
// }

// firstCol = 2;

// for(let i = lastRow; i>=firstRow;i--){
//     matrix[i][lastCol]=index;
//     index++
// }

// console.table(matrix)

/////////////////////////////////////////Spiral matrix from n Function

function spiralMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }

    let firstRow = 0;
    let lastRow = n - 1;
    let firstCol = 0;
    let lastCol = n - 1;
    let index = 1;

    while (firstRow <= lastRow && firstCol <= lastCol) {

        for (let i = firstCol; i <= lastCol; i++) {
            matrix[i][firstRow] = index;
            index++
        }

        firstCol++;

        for (let i = firstCol; i <= lastCol; i++) {
            matrix[lastRow][i] = index;
            index++
        }

        lastRow--;

        for (let i = lastRow; i >= firstRow; i--) {
            matrix[i][lastCol] = index;
            index++;
        }

        lastCol--;

        for (let i = lastCol; i >= firstCol; i--) {
            matrix[firstRow][i] = index;
            index++
        }

        firstRow++;
    }
    console.table(matrix)
}

spiralMatrix(5)