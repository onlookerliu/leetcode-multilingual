object RandomPickIndex {
  class Solution(_nums: Array[Int]) {

    def pick(target: Int): Int =
      _nums.foldLeft((-1, -1, 0)) { case ((pickIndex, count, i), num) =>
          if (num == target) {
            if (util.Random.nextInt(count) == 0) (i, count + 1, i + 1)
            else (pickIndex, count + 1, i + 1)
          }
          else (pickIndex, count + 1, i + 1)
      }._1

  }

  /**
    * Your Solution object will be instantiated and called as such:
    * var obj = new Solution(nums)
    * var param_1 = obj.pick(target)
    */
  def main(args: Array[String]): Unit = {
    var obj = new Solution(Array(1,2,3,3,3))
    var param_1 = obj.pick(3)
    println(param_1)
  }
}
