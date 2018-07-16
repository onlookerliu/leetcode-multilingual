object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
        val m = nums.zipWithIndex.groupBy(_._1)
        nums.zipWithIndex.withFilter(pair => {
            val diff = target - pair._1
            m.contains(diff) && m(diff).exists(_._2 != pair._2)
        }).map(_._2)
    }
}