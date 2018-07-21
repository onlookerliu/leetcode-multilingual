import "math"

func isBalanced(root *TreeNode) bool {
	balanced := true
	func dfs(root *TreeNode) int {
		if nil == root {
			return
		}
		left_height = root.Left != nil ? dfs(root.Left) : 0
		right_height = root.Right != nil ? dfs(root.Right) : 0

		if math.Abs(left_height - right_height) > 1 {
			balanced = false
		}

		return math.Max(left_height, right_height) + 1
	}
	dfs(root)
	return balanced
}