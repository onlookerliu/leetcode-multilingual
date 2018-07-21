class Solution {
    public int countDigitOne(int n) {
        int count = 0;
        long factor = 1;
        long cdigit = 0;
        long highN = 0;
        int lowN = 0;

        while (n / factor > 0) {
            cdigit = (n % (factor * 10)) / factor;
            highN = n / (factor * 10);

            if (cdigit == 0) {
                count += highN * factor;
            } else if (cdigit == 1) {
                count += highN * factor + lowN + 1;
            } else {
                count += (highN + 1) * factor;
            }
            lowN += cdigit * factor;
            factor *= 10;
        }

        return count;
    }

}