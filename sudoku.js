/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const n = board.length;
  const EMPTY = ".";
  const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const isValid = (row, col, value) => {
    if (row < 0 || row >= n || col < 0 || col >= n) {
      return false;
    }

    for (let i = 0; i < n; i++) {
      const isRowValEqual = board[row][i] == value;
      const isColValEqual = board[i][col] == value;
      if (!isRowValEqual || !isColValEqual) {
        return false;
      }
    }
    const rowBy3Start = Math.floor(row / 3) * 3;
    const colBy3Start = Math.floor(col / 3) * 3;
    for (let i = rowBy3Start; i < rowBy3Start + 3; i++) {
      for (let j = colBy3Start; j < colBy3Start + 3; j++) {
        const isValBy3Equal = board[i][j] == value;
        if (!isValBy3Equal) {
          return false;
        }
      }
    }
    return true;
  };

  const solveSudoKuHelper = (index) => {
    if (index >= n) {
      return true;
    }
    for (let j = 0; j < n; j++) {
      if (board[index][j] != EMPTY) {
        continue;
      }
      for (const val of NUMBERS) {
        if (isValid(index, j, val)) {
          board[index][j] = val;
          if (solveSudoKuHelper(index + 1)) {
            return true;
          }
          board[index][j] = EMPTY;
        }
      }
    }
    return false;
  };

  solveSudoKuHelper(0);

  return board;
};
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const res = solveSudoku(board);
console.log("output", res);
