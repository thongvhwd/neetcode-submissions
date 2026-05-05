class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (nums[m] > target) {
                r = m - 1;
            } else if (nums[m] < target) {
                l = m + 1;
            } else {
                return m;
            }
        }
        return -1;

        //return this.binary_search(0, nums.length - 1, nums, target);
    }

    /**
     * @param {number} l
     * @param {number} r
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binary_search(l, r, nums, target) {
        if (l > r) return -1;
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) return m;
        return nums[m] < target
            ? this.binary_search(m + 1, r, nums, target)
            : this.binary_search(l, m - 1, nums, target);
    }
}
