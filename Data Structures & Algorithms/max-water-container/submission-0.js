class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //(j - i) * min(heights[i], heights[j])
        let i = 0;

        let result = 0;
        while (i < heights.length) {
            let j = heights.length - 1;
            while (i < j) {
                const temp = (j - i) * Math.min(heights[i], heights[j]);
                if (temp > result) {
                    result = temp;
                }
                j--;
            }
            i++;
        }
        return result;
    }
}
