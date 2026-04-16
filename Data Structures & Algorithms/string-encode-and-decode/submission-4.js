class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        strs.forEach(str => {
            result += `${str.length}#${str}`
        });
        return JSON.stringify(strs);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf('#', i)        // find the '#'
            let length = parseInt(str.slice(i, j))   // everything before '#' is the length
            const word = str.slice(j + 1, j + 1 + length)  // read exactly `length` chars
            result.push(word)
            i = j + 1 + length             // jump past the word

        }
        return JSON.parse(str);
    }
}
