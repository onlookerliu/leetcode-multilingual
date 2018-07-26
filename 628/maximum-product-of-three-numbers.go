func maximumProduct(nums []int) int {
	length := len(nums)
	for i := 0; i < length-1; i++ {
		for j := i + 1; j < length; j++ {
			if nums[i] > nums[j] {
				nums[i], nums[j] = nums[j], nums[i]
			}
		}
	}

	maxProduct := nums[length-1] * nums[length-2] * nums[length-3]
	if maxProduct < nums[length-1]*nums[0]*nums[1] {
		maxProduct = nums[length-1] * nums[0] * nums[1]
	}
	if maxProduct < nums[0]*nums[1]*nums[2] {
		maxProduct = nums[0] * nums[1] * nums[2]
	}

	return maxProduct
}