/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findSecondMinimumValue(root *TreeNode) int {
	const intMax = 1<<63 - 1

	res := intMax

	var helper func(*TreeNode, int, *int)
	helper = func(root *TreeNode, lo int, hi *int) {
		if root == nil {
			return
		}

		if lo < root.Val && root.Val < *hi {
			*hi = root.Val
		}

		helper(root.Left, lo, hi)
		helper(root.Right, lo, hi)
	}

	helper(root, root.Val, &res)

	if res == intMax {
		return -1
	}
	return res
}