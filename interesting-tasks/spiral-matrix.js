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