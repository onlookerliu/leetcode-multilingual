class SortColors {
    fun sortColors(nums: IntArray) {
        var zero_size = 0
        var one_size = 0
        for (n in nums)
            if (n == 0)
                nums[zero_size++] = 0
            else if (n == 1)
                one_size++
        
        for (i in zero_size until nums.size)
            nums[i] = if (one_size-- > 0) 1 else 2
    }
}

fun main(args: Array<String>) {
    val nums = intArrayOf(2,0,2,1,1,0)
    SortColors().sortColors(nums)
    println(nums)
}