package main

import "fmt"

func maxCoins(nums []int) int {
	n := len(nums)

	newNums := make([]int, n+2)
	newNums[0] = 1
	newNums[n+1] = 1
	copy(newNums[1:n+1], nums)
	nums = newNums

	// dp[i][j] 是 nums[i:j+1] 的累加最大值
	// ans = dp[1][n]
	dp := make([][]int, n+2)
	for i := range dp {
		dp[i] = make([]int, n+2)
		if 0 < i && i < n+1 {
			dp[i][i] = nums[i-1] * nums[i] * nums[i+1]
		}
	}

	var i, j, k, max int
	for i = n; 1 <= i; i-- {
		for j = i; j <= n; j++ {
			max = nums[i-1]*nums[i]*nums[j+1] + dp[i+1][j] // k == i
			for k = i + 1; k <= j; k++ {
				temp := dp[i][k-1] + nums[i-1]*nums[k]*nums[j+1] + dp[k+1][j] // i <= k <= j dp[i][j] = max(dp[i][k-1] + k's impact + dp[k+1][j])
				if max < temp {
					max = temp
				}
			}
			dp[i][j] = max
		}
	}

	return dp[1][n]
}

func main() {
	nums := []int{3, 1, 5, 8}
	fmt.Println(maxCoins(nums))
}
