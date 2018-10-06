object PredictTheWinner {
    def PredictTheWinner(nums: Array[Int]): Boolean = {
        def getScore(nums: Array[Int], l: Int, r: Int): Int = {
            if (l == r)
                nums(l)
            else
                (nums(l) - getScore(nums, l+1, r)) max (nums(r) - getScore(nums, l, r-1))
        }
        getScore(nums, 0, nums.length-1) >= 0
    }

    def main(args: Array[String]) = {
        val nums = Array(1, 5, 233, 7)
        println(PredictTheWinner(nums))
    }
}