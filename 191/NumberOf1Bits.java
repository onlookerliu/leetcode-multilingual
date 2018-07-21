/**
 * NumberOf1Bits
 */
public class NumberOf1Bits {

    public int hammingWeight(int n) {
        int res = 0;
        while (n != 0) {
            res += 1;
            n = n & (n - 1);
        }
        return res;
    }
}