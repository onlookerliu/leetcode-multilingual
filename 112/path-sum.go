/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func hasPathSum(root *TreeNode, sum int) bool {
	if nil == root {
		return false
	}

	if nil == root.Left && nil == root.Right {
		if root.Val == sum {
			return true
		}
		return false
	}

	var hasLeftPath, hasRightPath bool
	if root.Left != nil {
		hasLeftPath = hasPathSum(root.Left, sum-root.Val)
	}
	if root.Right != nil {
		hasRightPath = hasPathSum(root.Right, sum-root.Val)
	}
	return hasLeftPath || hasRightPath
}