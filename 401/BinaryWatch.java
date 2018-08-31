import java.util.ArrayList;
import java.util.List;

/**
 * BinaryWatch
 */
public class BinaryWatch {

    public List<String> readBinaryWatch(int num) {
        List<String> ans = new ArrayList<>();

        for (int h=0; h < 12; h++) {
            for (int m=0; m < 60; m++) {

                // Number of set bits in hour portion and in minute part has to be equal to num.
                if (Integer.bitCount(h) + Integer.bitCount(m) == num) {
                    ans.add(String.format("%d:%02d", h, m));
                }
            }
        }

        return ans;
    }
}