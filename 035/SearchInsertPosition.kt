class SearchInsertPosition {
    fun searchInsert(nums: IntArray, target: Int): Int {
        var left = 0
        var right = nums.size - 1
        while (left <= right) {
            var mid = (left + right) / 2
            if (nums[mid] == target)
                return mid
            else if (nums[mid] < target)
                left = mid + 1
            else
                right = mid - 1
        }
        return left
    }
}

fun main(args: Array<String>) {
    val nums = intArrayOf(1, 3, 5, 6)
    val target = 5
    println(SearchInsertPosition().searchInsert(nums, target))
}