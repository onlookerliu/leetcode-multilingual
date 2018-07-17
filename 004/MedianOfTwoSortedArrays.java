import java.util.Arrays;

/**
 * MedianOfTwoSortedArrays
 */
public class MedianOfTwoSortedArrays {

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        int total = m + n;
        int half = total >> 1;

        return (total & 1) == 1 ? findKth(nums1, m, nums2, n, half + 1) : (findKth(nums1, m, nums2, n, half) + findKth(nums1, m, nums2, n, half + 1)) / 2;
    }

    public int findKth(int[] nums1, int m, int[] nums2, int n, int k) {
        if (m > n)
            return findKth(nums2, n, nums1, m, k);
        if (m == 0)
            return nums2[k-1];
        if (k == 1)
            return Math.min(nums1[0], nums2[0]);

        int pa = Math.min(k >> 1, m);
        int pb = k - pa;

        if (nums1[pa - 1] < nums2[pb - 1]) {
            return findKth(Arrays.copyOfRange(nums1, pa, m), m-pa, nums2, n, k-pa);
        } else if (nums1[pa - 1] > nums2[pb - 1]) {
            return findKth(nums1, m, Arrays.copyOfRange(nums2, pb, n), n-pb, k-pb);
        } else {
            return nums1[pa - 1];
        }
    }
    
    public static void main(String[] args) {
        int[] nums1 = new int[]{1, 2};
        int[] nums2 = new int[]{3, 4};
        MedianOfTwoSortedArrays sol = new MedianOfTwoSortedArrays();
        System.out.println(sol.findKth(nums1, nums1.length, nums2, nums2.length, 2));
        System.out.println(sol.findKth(nums1, nums1.length, nums2, nums2.length, 3));
        System.out.println((sol.findKth(nums1, nums1.length, nums2, nums2.length, 2) + sol.findKth(nums1, nums1.length, nums2, nums2.length, 3)) / 2);
        System.out.println(sol.findMedianSortedArrays(nums1, nums2));
    }
}