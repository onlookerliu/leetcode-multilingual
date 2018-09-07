object MedianOfTwoSortedArrays {
    def findMedianSortedArrays(nums1: Array[Int], nums2: Array[Int]): Double = {
        val m = nums1.length
        val n = nums2.length
        val total = m + n
        val half = total >> 1
        if ((total & 1) == 1) {
            return findKth(nums1, m, nums2, n, half+1)
        } else {
            return (findKth(nums1, m, nums2, n, half) + findKth(nums1, m, nums2, n, half+1)) / 2
        }
    }

    def findKth(nums1: Array[Int], m: Int, nums2: Array[Int], n: Int, k: Int): Int = {
        if (m > n) {
            return findKth(nums2, n, nums1, m, k)
        }
        if (m == 0) {
            return nums2(k-1)
        }
        if (k == 1) {
            return nums1(0) min nums2(0)
        }

        val pa = k>>1 min m
        val pb = k-pa

        if (nums1(pa-1) < nums2(pb-1)) {
            return findKth(nums1.slice(pa, m), m-pa, nums2, n, k-pa)
        } else if (nums1(pa-1) > nums2(pb-1)) {
            return findKth(nums1, m, nums2.slice(pb, n), n-pb, k-pb)
        } else {
            return nums1(pa-1)
        }
    }

    def main(args: Array[String]): Unit = {
        val nums1 = Array[Int](1, 2)
        val nums2 = Array[Int](3, 4)
        println(findMedianSortedArrays(nums1, nums2))
    }
}