class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = new Map();

        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            map.set(c, (map.get(c) ?? 0) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            const c = t[i];
            if (!map.has(c)) return false;
            map.set(c, map.get(c) - 1);
            if (map.get(c) < 0) return false;  // t has more of this char than s
        }

        return true;

    }
}
