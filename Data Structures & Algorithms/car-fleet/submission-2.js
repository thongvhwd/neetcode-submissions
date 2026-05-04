class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const result = new Array(position.length).fill(0);
        //sort index by position
        const indexByPosition = [];
        const sortedPosition = position.toSorted((a, b) => b - a);
        sortedPosition.forEach((p) => {
            indexByPosition.push(position.indexOf(p));
        });

        const stack = []; // stores time

        for (let i = 0; i < indexByPosition.length; i++) {
            // while current temp is warmer than temp at stack's top index
            // while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            //     const idx = stack.pop();
            //     result[idx] = i - idx; // days waited
            // }
            // stack.push(i);
            const posByIndex = position[indexByPosition[i]];
            const speedByIndex = speed[indexByPosition[i]];
            const hour = (target - posByIndex) / speedByIndex;

            if (stack.length == 0 || hour > stack[stack.length - 1]) {
                stack.push(hour);
            }
        }

        return stack.length;
    }
}
