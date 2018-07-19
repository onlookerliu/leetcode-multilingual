func canJump(nums []int) bool {
	reach := 0
	size := len(nums)
	for i := 0; i < size; i++ {
		if i > reach || reach >= (size-1) {
			break
		}
		if reach < (i + nums[i]) {
			reach = i + nums[i]
		}
	}
	return reach >= (size - 1)
}