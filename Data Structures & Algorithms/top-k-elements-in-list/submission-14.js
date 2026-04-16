class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        nums.forEach(n => {
            if (!map[n]) {
                map[n] = 0;
            }
            map[n] = map[n] + 1;
        });
        const result = [];

        //find most with k
        const mostNums = Object.values(map).sort((a, b) => b - a).slice(0, k);

        for (const [key, value] of Object.entries(map)) {
            mostNums.forEach(mostNum => {
                if (value == mostNum && !result.includes(key)) {
                    result.push(key);
                }
            })

        }
        return result;
    }
}
