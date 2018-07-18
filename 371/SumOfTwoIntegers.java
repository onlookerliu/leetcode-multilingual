public class SumOfTwoIntegers {

    // public int getSum(int a, int b) {
    //     while (b != 0) {
    //         int carrier = (a & b) << 1;
    //         a ^= b;
    //         b = carrier;
    //     }
    //     return a;
    // }

    public int getSum(int a, int b) {
        return b == 0 ? a : getSum(a ^ b, (a & b) << 1);
    }

}