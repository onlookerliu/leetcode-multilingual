import java.util.HashMap;
import java.util.Map;

class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            Integer idx = map.get(nums[i]);

            if (null == idx) {
                map.put(target - nums[i], i);
            } else {
                if (idx < i) {
                    res[0] = idx;
                    res[1] = i;
                    return res;
                }
            }
        }
        return res;
    }
}