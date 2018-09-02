class Solution {
    public:
    int binaryGap(int N) {
        int l = -1;
        int ans = 0;
        for (int i = 0; i < 31; ++i) {
            if (N & (1 << i)) { // 从右到左逐位检查是否为1
                if (l >= 0)
                    ans = max(ans, i - l);
                l = i;
            }
        }
        return ans;
    }
}