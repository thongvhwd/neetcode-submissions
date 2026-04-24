class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //2,3,4,5,6,7,8,9,10,11,12,13,14 target 7

        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            const numLeft = numbers[left];
            const numRight = numbers[right];

            const currentSum = numLeft + numRight;
            if (currentSum > target) {
                right--;
            } else if (currentSum < target) {
                left++;
            } else {
                return [left+1, right+1];
            }
        }
        return [];
    }
}
