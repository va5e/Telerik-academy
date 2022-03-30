(curCol-1 < 0) ? leftPos=0 : leftPos = matrix[curRow][curCol - 1]
  (curCol+1 === cols) ? rightPos = 0 : rightPos = matrix[curRow][curCol + 1]
  (curRow + 1 === rows) ? downPos = 0 : downPos = matrix[curRow + 1][curCol]
  (curRow -1 < 0) ? upPos = 0 : upPos = matrix[curRow - 1][curCol]