class Solution {
    public:
    bool lemonadeChange(vector<int>& bills) {
        int fives = 0;
        int tens = 0;
        for (const int bill : bills) {
            if (bill == 5) {
                ++fives;
            } else if (bill == 10) {
                if (!fives) return false;
                ++tens;
                --fives;
            } else if (bill == 20) {
                if (tens && fives) {
                    --tens;
                    --fives;
                } else if (fives >= 3) {
                    fives -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
};