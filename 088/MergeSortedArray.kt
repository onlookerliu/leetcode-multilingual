class Solution {
    fun merge(nums1: IntArray, m: Int, nums2: IntArray, n: Int): Unit {
        var i = m - 1
        var j = n - 1
        var k = n + m - 1
        while (i > -1 && j > -1) nums1[k--] = if (nums1[i] > nums2[j]) nums1[i--] else nums2[j--]
        while (j > -1) nums1[k--] = nums2[j--]
    }
}

fun main(args: Array<String>) {
    val nums1 = intArrayOf(1,2,3,0,0,0)
    val nums2 = intArrayOf(2,5,6)
    val sol = Solution()
    sol.merge(nums1, 3, nums2, 3)
    println(nums1)
}