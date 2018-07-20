object MergeSortedArray {
  def merge(nums1: Array[Int], m: Int, nums2: Array[Int], n: Int): Unit = {
    @annotation.tailrec
    def merge(m: Int, n: Int, index: Int): Unit = {
      if (index < 0) Unit
      else if (m >= 0 && n >= 0) {
        if (nums1(m) > nums2(n)) {
          nums1(index) = nums1(m)
          merge(m-1, n, index-1)
        } else {
          nums1(index) = nums2(n)
          merge(m, n-1, index-1)
        }
      } else if (n >= 0) {
        nums1(index) = nums2(n)
        merge(m-1, n-1, index-1)
      }
    }

    merge(m-1, n-1, m+n-1)
//    println(nums1)
  }

  def main(args: Array[String]): Unit = {
    var nums1 = Array(1,2,3,0,0,0)
    var nums2 = Array(2,5,6)
    println(merge(nums1, 3, nums2, 3))
  }
}
