object TwoSumIIInputArrayIsSorted {
  def twoSum(numbers: Array[Int], target: Int): Array[Int] = {
    @annotation.tailrec
    def twoSum(low: Int, high: Int): Array[Int] = {
      val s = numbers(low) + numbers(high)
      if (s == target)
        Array(low+1, high+1)
      else if (s < target)
        twoSum(low+1, high)
      else
        twoSum(low, high-1)
    }

    twoSum(0, numbers.length-1)
  }

  def main(args: Array[String]): Unit = {
    val numbers = Array(2, 7, 11, 15)
    val target = 9
    for (item <- twoSum(numbers, target)) { println(item) }
  }
}
