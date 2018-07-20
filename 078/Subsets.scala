object Subsets {
  def subsets(nums: Array[Int]): List[List[Int]] = {
    val len = nums.length
    val threshold = (1 << len) - 1

    @annotation.tailrec
    def subsets(n: Int, i: Int, subset: List[Int]): List[Int] =
      if (i >= len) subset.reverse
      else if ((n & (1 << i)) != 0) subsets(n, i+1, nums(i) :: subset)
      else subsets(n, i+1, subset)

    (for (i <- 0 to threshold)
      yield subsets(i, 0, List.empty)
      ).toList
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(1, 2, 3)
    println(subsets(nums))
  }
}
