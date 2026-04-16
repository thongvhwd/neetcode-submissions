class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        const sMap = new Map();
        for (let i = 0; i < s.length; i++) {
            const character = s.charAt(i);
            if (!sMap.has(character)) {
                sMap.set(character, 1);
            } else {
                const value = sMap.get(character) + 1;
                sMap.set(character, value);
            }
        }

        const tMap = new Map();
        for (let i = 0; i < t.length; i++) {
            const character = t.charAt(i);
            if (!tMap.has(character)) {
                tMap.set(character, 1);
            } else {
                const value = tMap.get(character) + 1;
                tMap.set(character, value);
            }
        }

        for (const [key, value] of tMap.entries()) {
            if (sMap.get(key) != value) {
                return false;
            }
        }
        return true;
    }
}
