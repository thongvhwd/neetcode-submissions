class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //find target row
        const rows = matrix.length;
        const cols = matrix[0].length;

        let top = 0;
        let bot = rows - 1;
        let row = 0;
        while (top <= bot) {
            row = Math.floor((top + bot) / 2);
            if (target > matrix[row][matrix[row].length - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bot = row - 1;
            } else {
                break;
            }
        }
        if (top > bot) {
            return false;
        }
        let l = 0;
        let r = cols - 1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            const value = matrix[row][m];
            if (target > value) {
                l = m + 1;
            } else if (target < value) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
