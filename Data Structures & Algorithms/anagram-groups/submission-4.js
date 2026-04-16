class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const sortedWord = (word) => {
            return word.split('').sort().join('');
        };

        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const word = sortedWord(strs[i]);

            if (!map.has(word)) {
                map.set(word, [strs[i]])

            } else {
                const value = map.get(word);
                value.push(strs[i]);
                map.set(word, value);
            }
        }

        return Array.from(map.values()).sort((a, b) => a.length - b.length);

        //sort by length
        // result.sort((a, b) => a.length - b.length);

        // return result;
    }
}
