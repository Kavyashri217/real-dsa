// Recursive function to place queens
function placeQueens(i, cols, leftDiagonal, rightDiagonal, cur, result) {
    const n = cols.length;

    // base case: If all queens are placed
    if (i === n) {
        result.push([...cur]);
        return;
    }

    // Consider the row and try placing
    // queen in all columns one by one
    for (let j = 0; j < n; j++) {

        // Check if the queen can be placed
        if (cols[j] || rightDiagonal[i + j] || leftDiagonal[i - j + n - 1]) {
            continue;
        }

        // mark the cell occupied
        cols[j] = 1;
        rightDiagonal[i + j] = 1;
        leftDiagonal[i - j + n - 1] = 1;
        cur.push(j + 1);

        placeQueens(i + 1, cols, leftDiagonal, rightDiagonal, cur, result);

        // remove the queen from current cell
        cur.pop();
        cols[j] = 0;
        rightDiagonal[i + j] = 0;
        leftDiagonal[i - j + n - 1] = 0;
    }
}

// Function to find the solution
// to the N-Queens problem
function nQueen(n) {
    
    // array to mark the occupied cells
    const cols = new Array(n).fill(0);
    const leftDiagonal = new Array(2 * n).fill(0);
    const rightDiagonal = new Array(2 * n).fill(0);
    const cur = [];
    const result = [];

    // Place queens
    placeQueens(0, cols, leftDiagonal, rightDiagonal, cur, result);

    return result;
}

// Driven Code
const n = 4;
const ans = nQueen(n);
ans.forEach(a => {
    console.log(a.join(" "));
});