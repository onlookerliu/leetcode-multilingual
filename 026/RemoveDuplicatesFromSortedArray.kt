class RemoveDuplicatesfromSortedArray {
 	fun removeDuplicates(nums: IntArray): Int {
 		if (nums.size == 0)
 			return 0
 		var value = nums[0]
 		var size = 1
 		for (i in nums)
 			if (i != value) {
 				value = i
 				nums[size++] = value
 			}
 		return size
 	}
}

fun main(args: Array<String>) {
    var nums: IntArray = intArrayOf(0,0,1,1,1,2,2,3,3,4)
    println(RemoveDuplicatesfromSortedArray().removeDuplicates(nums))
}