import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * FindAllNumbersDisappearedInAnArray
 */
public class FindAllNumbersDisappearedInAnArray {

    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> res = new ArrayList<Integer>();
        Map<Integer, Boolean> hash = new HashMap<>();

        for (int num : nums) {
            hash.put(num, true);
        }

        for (int i = 0; i < nums.length; i++) {
            if (null == hash.get(i+1)) {
                res.add(i+1);
            }
        }

        return res;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{4, 3, 2, 7, 8, 2, 3, 1};
        System.out.println(new FindAllNumbersDisappearedInAnArray().findDisappearedNumbers(nums));
    }
}


// public class FindAllNumbersDisappearedInAnArray {

//     public List<Integer> findDisappearedNumbers(int[] nums) {
//         List<Integer> result = new ArrayList<Integer>();
//         for (int i = 0; i < nums.length; ++i) {
//             int index = (nums[i] > 0 ? nums[i] : -nums[i]) - 1;
//             if (nums[index] > 0) {
//                 nums[index] *= -1;
//             }
//         }
//         for (int i = 0; i < nums.length; ++i) {
//             if (nums[i] > 0) {
//                 result.add(i + 1);
//             }
//         }
//         return result;
//     }

// }