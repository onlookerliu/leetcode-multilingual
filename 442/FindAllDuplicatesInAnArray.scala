object FindAllDuplicatesInAnArray {
  def findDuplicates(nums: Array[Int]): List[Int] = {
    var res = List.empty[Int]
    for ((item, _) <- nums.zipWithIndex) {
      if (nums(item-1) < 0) res = res :+ item
      else nums(item-1) *= -1
    }

    res
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(4,3,2,7,8,2,3,1)
    findDuplicates(nums).foreach(println)
  }

}
