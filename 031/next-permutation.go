func nextPermutation(nums []int) {
	var i, j int
	size := len(nums)
	for i = size - 2; i >= 0; i-- {
		if nums[i+1] > nums[i] {
			for j = size - 1; j > i; j-- {
				if nums[j] > nums[i] {
					break
				}
			}
			nums[i], nums[j] = nums[j], nums[i]
			for l, r := i+1, size-1; l < r; l += 1, r -= 1 {
				nums[l], nums[r] = nums[r], nums[l]
			}
			return
		}
	}
	for l, r := 0, size-1; l < r; l += 1, r -= 1 {
		nums[l], nums[r] = nums[r], nums[l]
	}
}