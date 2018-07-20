func numDecodings(s string) int {
	if len(s) == 0 || s[0] == '0' {
		return 0
	}

	dp := make([]int, len(s)+1)
	dp[0] = 1

	for i := 1; i < len(dp); i++ {
		if s[i-1] == '0' {
			dp[i] = 0
		} else {
			dp[i] = dp[i-1]
		}

		if i > 1 && (s[i-2] == '1' || (s[i-2] == '2' && int(s[i-1]) <= int('6'))) {
			dp[i] += dp[i-2]
		}

	}

	return dp[len(s)]
}