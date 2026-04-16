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
        const resultGroupIndex = [];

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
                const wordGroupIndex = [i];
                for (let y = 1; y < sortedWords.length; y++) {
                    const compareWord = sortedWords[y];
                    if (word === compareWord && i != y) {
                        wordGroupIndex.push(y);
                    }
                }
                resultGroupIndex.push(wordGroupIndex);
            }

        }
        //sort by length
        resultGroupIndex.sort((a, b) => a.length - b.length);

        //conver index to word
        const result = [];
        resultGroupIndex.forEach(resultGroup => {
            const valueGroup = []
            resultGroup.forEach(item => {
                valueGroup.push(map.get(item));
            })
            result.push(valueGroup);

        });
        return result;
    }
}
