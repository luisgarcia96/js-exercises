// Sudoku Background
// Sudoku is a game played on a 9x9 grid. 
//The goal of the game is to fill all cells of the grid 
//with digits from 1 to 9, so that each column, each row, 
//and each of the nine 3x3 sub-grids (also known as blocks) 
//contain all of the digits from 1 to 9.
// More info at: http://en.wikipedia.org/wiki/Sudoku

// Sudoku Solution Validator
// Write a function that accepts a Sudoku board, and returns true if it is a valid Sudoku solution, or false otherwise. The cells of the input Sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// Details
// All inputs are guaranteed to be 2D boards of size 9x9 with possible values in range 0-9.
// Rows, columns and blocks (3x3 small squares) must contain each number from range 1-9 exactly once.
// User solution must not modify input boards.

const testBoardValid = [
    [9,2,6,5,8,3,4,7,1],
    [7,1,3,4,2,6,9,8,5],
    [8,4,5,9,7,1,3,6,2],
    [3,6,2,8,5,7,1,4,9],
    [4,7,1,2,6,9,5,3,8],
    [5,9,8,3,1,4,7,2,6],
    [6,5,7,1,3,8,2,9,4],
    [2,8,4,7,9,5,6,1,3],
    [1,3,9,6,4,2,8,5,7]
];
const testBoardInvalid = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
];
const testBoardInvalid2 = [
    [8,4,7,2,6,5,1,0,3],
    [1,3,6,7,0,8,2,4,5],
    [0,5,2,1,4,3,8,6,7],
    [4,2,0,6,7,1,5,3,8],
    [6,7,8,5,3,2,0,1,4],
    [3,1,5,4,8,0,7,2,6],
    [5,6,4,0,1,7,3,8,2],
    [7,8,1,3,2,4,6,5,0],
    [2,0,3,8,5,6,4,7,1]
];
const testBoardInvalid3 = [
    [1,2,3,4,5,6,7,8,9],
    [2,3,4,5,6,7,8,9,1],
    [3,4,5,6,7,8,9,1,2],
    [4,5,6,7,8,9,1,2,3],
    [5,6,7,8,9,1,2,3,4],
    [6,7,8,9,1,2,3,4,5],
    [7,8,9,1,2,3,4,5,6],
    [8,9,1,2,3,4,5,6,7],
    [9,1,2,3,4,5,6,7,8]
];


function validateSudoku(board) {
    if (columnsHaveDuplicates(board) || rowHaveDuplicates(board) || !checkSquares(board)) {
        return false;
    }
    return true;
}

//Columns & Row verification functions
function columnsHaveDuplicates(board) {
    for (const column of board) {
        if (hasDuplicatesOrHasInvalidNumber(column)) {
            return true;
        }
    }
    return false;
}

function rowHaveDuplicates(board) {
    for (const columnIdx in board) {
        const row = getRow(board, columnIdx);
        if (hasDuplicatesOrHasInvalidNumber(row)) {
            return true;
        }
    }
    return false;
}

function checkSquares(board) { 
    for (let i = 0; i < 9; i += 3) {
       for (let j = 0; j < 9; j += 3) {
          square = [];
          for (let k = i; k < i + 3; k++) {
             for (let l = j; l < j + 3; l++) {
                square.push(board[k][l]);
            }
        }
        if (hasDuplicatesOrHasInvalidNumber(square)) {
            return false;
        }
    }
    }   
    return true;
 }

//Helpers functions
function getRow(board, index) {
    return board.map((subArray) => {
        return subArray[index];
    });
}

function hasDuplicatesOrHasInvalidNumber(array) {
    let seen = {};
    for (let i = 0; i < array.length; i++) {
        if (!isValidNumber(array[i])) {
            return true
        }
        if (seen[array[i]]) {
            return true;
        }
        seen[array[i]] = true;
    }
    return false;
}

function isValidNumber(number) {
    return (number >=1 && number <= 9);
}

console.log(validateSudoku(testBoardValid));
console.log(validateSudoku(testBoardInvalid));
console.log(validateSudoku(testBoardInvalid2));
console.log(validateSudoku(testBoardInvalid3));

// console.log(checkSquares(testBoardInvalid3));
