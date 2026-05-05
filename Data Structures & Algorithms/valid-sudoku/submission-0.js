class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const v = board[r][c];
                if (v == ".") continue;

                const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(v)) return false;
                if (cols[c].has(v)) return false;
                if (boxes[box].has(v)) return false;

                rows[r].add(v);
                cols[c].add(v);
                boxes[box].add(v);
            }
        }
        return true;
    }
}
