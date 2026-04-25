class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const a = [-1, 0, 1, 2, -1, -4];
        //
        const result = new Map();
        nums.sort((a, b) => a - b);
        let i = 0;
        while (i < nums.length) {
            let j = i + 1;
            let k = nums.length - 1;
            const numI = nums[i];

            while (j < k) {
                const numJ = nums[j];
                const numK = nums[k];
                const sumJK = numJ + numK;
                //     const currentSum = numLeft + numRight;
                //     if (currentSum > target) {
                //         right--;
                //     } else if (currentSum < target) {
                //         left++;
                //     } else {
                //         return [left+1, right+1];
                //     }
                if (sumJK > -numI) {
                    k--;
                } else if (sumJK < -numI) {
                    j++;
                } else {
                    const key = ` ${numI}|${numJ}|${numK}`;
                    !result.has(key) && result.set(key, [numI, numJ, numK]);
                    j++;
                }
            }
            i++;
        }
        return [...result.values()];
    }
}
