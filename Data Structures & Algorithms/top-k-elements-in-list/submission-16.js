class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        nums.forEach(n => {
            map[n] = (map[n] ?? 0) + 1;
        });
        const result = [];

        // Step 2: bucket[i] = all numbers that appear exactly i times

        const bucket = Array.from({ length: nums.length + 1 }, () => [])

        for (const [num, freq] of Object.entries(map)) {
            bucket[freq].push(num);
        }

        //Step 3: read buckets from the end, collect until we have k elements
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            result.push(...bucket[i]);
        }

        //find most with k
        // const mostNums = Object.values(map).sort((a, b) => b - a).slice(0, k);

        // for (const [key, value] of Object.entries(map)) {
        //     mostNums.forEach(mostNum => {
        //         if (value == mostNum && !result.includes(key)) {
        //             result.push(key);
        //         }
        //     })

        // }
        return result;
    }
}
