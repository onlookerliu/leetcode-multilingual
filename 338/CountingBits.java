/**
 * CountingBits
 */
public class CountingBits {

    public int[] countBits(int num) {
        int[] results = new int[num+1];
        results[0] = 0;
        int index = 1, segment = 1;
        while (index <= num) {
            for (int i = 0; i < Integer.min(segment, num + 1 - index); i++)
                results[index + i] = 1 + results[i];
            index += segment;
            segment <<= 1;
        }
        return results;
    }

    public static void main(String[] args) {
        int num = 5;
        System.out.println(new CountingBits().countBits(num));
    }
}