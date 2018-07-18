func generateParenthesis(n int) []string {
	var ans []string

	var dfs func(string, int, int, int)
	dfs = func(s string, left int, right int, n int) {
		if left == n && right == n {
			ans = append(ans, s)
			return
		}

		if left+1 <= n {
			dfs(s+"(", left+1, right, n)
		}

		if right+1 <= n && right+1 <= left {
			dfs(s+")", left, right+1, n)
		}
	}

	dfs("", 0, 0, n)
	return ans
}