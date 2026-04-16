class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        output[0] = 1;
        // Step 1: output[i] = tích tất cả bên trái
        for (let i = 1; i < nums.length; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }
        // Step 2: * tích tất cả bên phải
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] = output[i] * suffix;
            suffix = suffix * nums[i];
        }
        return output;
    }
}
