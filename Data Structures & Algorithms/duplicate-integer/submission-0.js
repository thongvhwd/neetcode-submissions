class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myHashSet = new Set(nums);
        if(myHashSet.size!=nums.length){
            return true;
        }
        return false;
    }
}
