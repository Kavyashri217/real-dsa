// Function to check if it is safe to place
function isSafe(mat, row, col) {
    let n = mat.length;
    let i, j;

    // Check this col on upper side
    for (i = 0; i < row; i++)
        if (mat[i][col])
            return 0;

    // Check upper diagonal on left side
    for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (mat[i][j])
            return 0;

    // Check upper diagonal on right side
    for (i = row - 1, j = col + 1; j < n && i >= 0; i--, j++)
        if (mat[i][j])
            return 0;

    return 1;
}

// Recursive function to place queens
function placeQueens(row, mat, result) {
    let n = mat.length;

    // base case: If all queens are placed
    if (row === n) {

        // store current solution
        let ans = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j]) {
                    ans.push(j + 1);
                }
            }
        }
        result.push(ans);
        return;
    }

    // Consider the row and try placing
    // queen in all columns one by one
    for (let i = 0; i < n; i++) {

        // Check if the queen can be placed
        if (isSafe(mat, row, i)) {
            mat[row][i] = 1;
            placeQueens(row + 1, mat, result);

            // backtrack
            mat[row][i] = 0;
        }
    }
}

// Function to find all solutions
function nQueen(n) {

    // Initialize the board
    let mat = Array.from({ length: n }, () => Array(n).fill(0));
    let result = [];

    // Place queens
    placeQueens(0, mat, result);

    return result;
}

// Driver code
let n = 4;
let result = nQueen(n);
for (let ans of result) {
    console.log(ans.join(' '));
}