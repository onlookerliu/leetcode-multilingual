/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findTilt(root *TreeNode) int {
	var sumAndTilt func(*TreeNode) (int, int)
	sumAndTilt = func(root *TreeNode) (int, int) {
		if root == nil {
			return 0, 0
		}
		sumLeft, tiltLeft := sumAndTilt(root.Left)
		sumRight, tiltRight := sumAndTilt(root.Right)
		return sumLeft + sumRight + root.Val, abs(sumLeft-sumRight) + tiltLeft + tiltRight
	}

	_, tiltTree := sumAndTilt(root)
	return tiltTree
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}