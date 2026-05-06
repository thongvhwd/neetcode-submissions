class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;

        //Nếu k lớn hơn pile to nhất, thì mỗi giờ vẫn chỉ ăn được 1 đống — ăn nhanh hơn cũng vô ích.
        //k = 4  → mỗi đống xong trong 1 giờ → tổng 4 giờ
        //k = 10 → mỗi đống vẫn xong trong 1 giờ → tổng vẫn 4 giờ (không cải thiện)
        let right = Math.max(...piles);

        while (left < right) {
            const mid = Math.floor((right + left) / 2);

            if (this.canEat(piles, mid, h)) {
                right = mid; //mid có thể là đáp án, thử nhỏ hơn
            } else {
                left = mid + 1; //mid chậm ăn cần nhanh hơn
            }
        }
        return left;
    }

    /**
     * @param {number[]} piles
     * @param {number} k
     * @param {number} h
     * @return {boolean}
     */
    canEat(piles, k, h) {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        return hours <= h;
    }
}
