type NumArray struct {
	dp []int
}

func Constructor(nums []int) NumArray {
	size := len(nums)
	dp := make([]int, size+1)
	for i := 1; i <= size; i++ {
		dp[i] = dp[i-1] + nums[i-1]
	}

	return NumArray{dp: dp}
}

func (this *NumArray) SumRange(i int, j int) int {
	return this.dp[j+1] - this.dp[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.SumRange(i,j);
 */