func findMaxConsecutiveOnes(nums []int) int {
	var maxConsecutiveOnes int
	length := len(nums)
	for i := 0; i < length; {
		if 0 == nums[i] {
			i++
			continue
		} else {
			consecutiveOnes := 0

			for nums[i] == 1 {
				consecutiveOnes++
				i++
			}
			if consecutiveOnes > maxConsecutiveOnes {
				maxConsecutiveOnes = consecutiveOnes
			}
		}
	}
	return maxConsecutiveOnes
}