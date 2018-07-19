public class RemoveDuplicatesfromSortedArray {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0)
            return 0;
        int val = nums[0], size = 1;
        for (int i : nums)
            if (i != val)
                nums[size++] = val = i;
        return size;
    }
}