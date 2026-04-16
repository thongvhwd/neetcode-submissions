class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (!set.has(num - 1)) {
                let length = 0;
                while (set.has(num)) {
                    num++;
                    length++;
                    if (longest < length) {
                        longest = length;
                    }
                }
            }
        }
        return longest;
    }
}
