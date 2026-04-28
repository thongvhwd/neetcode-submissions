class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];
        for (let i = 0; i < temperatures.length; i++) {
            let y = i + 1;

            const dayTemperatures = [];
            while (y < temperatures.length) {
                dayTemperatures.push(temperatures[y]);
                if (temperatures[i] < temperatures[y]) {
                    break;
                }
                y++;
            }
            let day = 0;
            if (dayTemperatures.length > 0) {
                day =
                    dayTemperatures[dayTemperatures.length - 1] > temperatures[i]
                        ? dayTemperatures.length
                        : 0;
            }

            result.push(day);
        }

        return result;
    }
}
