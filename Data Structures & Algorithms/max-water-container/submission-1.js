class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //(j - i) * min(heights[i], heights[j])
        //[1,7,2,5,4,7,3,6]
        let i = 0;

        let result = 0;
        let j = heights.length - 1;

        while (i < j) {
            const temp = (j - i) * Math.min(heights[i], heights[j]);
            if (temp > result) {
                result = temp;
            }
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return result;
    }
}
