class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s
            .replace(/[^a-zA-Z0-9]/g, "")
            .trim()
            .toLowerCase();
        let left = 0,
            right = s.length - 1;
        for (let i = 0; i < s.length / 2; i++) {
            const charFromLeft = s.charAt(left);
            const charFromRight = s.charAt(right);
            if (left == right) {
                break;
            }
            if (charFromLeft !== charFromRight) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
