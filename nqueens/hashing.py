# Recursive function to place queens
def placeQueens(i, cols, leftDiagonal, rightDiagonal, cur, result):
    n = len(cols)

    # base case: If all queens are placed
    if i == n:
        result.append(cur[:])
        return

    # Consider the row and try placing
    # queen in all columns one by one
    for j in range(n):

        # Check if the queen can be placed
        if cols[j] or rightDiagonal[i + j] or leftDiagonal[i - j + n - 1]:
            continue

        # mark the cell occupied
        cols[j] = 1
        rightDiagonal[i + j] = 1
        leftDiagonal[i - j + n - 1] = 1
        cur.append(j + 1)

        placeQueens(i + 1, cols, leftDiagonal, rightDiagonal, cur, result)

        # remove the queen from current cell
        cur.pop()
        cols[j] = 0
        rightDiagonal[i + j] = 0
        leftDiagonal[i - j + n - 1] = 0


# Function to find the solution
# to the N-Queens problem
def nQueen(n):
    
    # array to mark the occupied cells
    cols = [0] * n
    leftDiagonal = [0] * (2 * n)
    rightDiagonal = [0] * (2 * n)
    cur = []
    result = []

    # Place queens
    placeQueens(0, cols, leftDiagonal, rightDiagonal, cur, result)

    return result


if __name__ == "__main__":
    n = 4
    ans = nQueen(n)
    for a in ans:
        print(" ".join(map(str, a)))