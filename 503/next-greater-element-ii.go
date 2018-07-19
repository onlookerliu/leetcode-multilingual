func nextGreaterElements(nums []int) []int {
	var res []int
	length := len(nums)
	for i, num := range nums {
		j := (i + 1) % length
		found := false
		for j != i {
			if nums[j] > num {
				found = true
				res = append(res, nums[j])
				break
			}
			j = (j + 1) % length
		}
		if !found {
			res = append(res, -1)
		}
	}
	return res
}