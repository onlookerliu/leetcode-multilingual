object JumpGame {
    def canJump(nums: Array[Int]): Boolean = {
        @annotation.tailrec
        def canJumpUtil(i: Int, len: Int, farthest: Int): Boolean = {
            if (i == len-1) farthest >= i
            else if (farthest < i) false
            else if (i + nums(i) > farthest) canJumpUtil(i+1, len, i+nums(i))
            else canJumpUtil(i+1, len, farthest)
        }

        canJumpUtil(0, nums.length, 0)
    }
}

object JumpGame {
    def canJump(nums: Array[Int]): Boolean = {
        var reach = 0
        var size = nums.length
        for (i <- 0 until size if i <= reach; if reach < size - 1) {
            reach = Math.max(reach, i + nums(i))
        }
        reach >= size - 1
    }
}