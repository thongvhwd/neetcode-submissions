class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


        const map = new Map();
        for (let i = 0; i < strs.length; i++) {
            map.set(i, strs[i]);
        }

        const result = [];
        //sort words
        const sortedWords = strs.map(word => {
            return word.split('').sort().join('');
        });

        //group same words to result
        const set = new Set();
        for (let i = 0; i < sortedWords.length; i++) {
            const word = sortedWords[i];
            if (!set.has(word)) {
                set.add(word)

                const valueGroup = [map.get(i)]

                for (let y = 1; y < sortedWords.length; y++) {
                    const compareWord = sortedWords[y];
                    if (word === compareWord && i != y) {
                        valueGroup.push(map.get(y));
                    }
                }
                result.push(valueGroup);
            }

        }
        //sort by length
        result.sort((a, b) => a.length - b.length);

        return result;
    }
}
