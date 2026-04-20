class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 === 1) {
            return false;
        }
        const parentheses = [];

        const isOpen = (s) => ["(", "{", "["].includes(s);
        const isMatched = (open, close) => {
            switch (open) {
                case "(":
                    return close === ")";
                case "[":
                    return close === "]";
                case "{":
                    return close === "}";
                default:
                    return false;
            }
        };
        for (let i = 0; i <= s.length - 1; i++) {
            const character = s.charAt(i);
            if (isOpen(character)) {
                parentheses.push(character);
            } else {
                const previousChar = parentheses.pop();
                if (!isMatched(previousChar, character)) {
                    return false;
                }
            }
        }

        return parentheses.length == 0;
    }
}
