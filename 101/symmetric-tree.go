/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
	if nil == root {
		return true
	}
	var isMirror func(*TreeNode, *TreeNode) bool
	isMirror = func(root1 *TreeNode, root2 *TreeNode) bool {
		if nil == root1 && nil == root2 {
			return true
		} else if nil == root1 || nil == root2 {
			return false
		} else {
			return (root1.Val == root2.Val) && isMirror(root1.Left, root2.Right) && isMirror(root1.Right, root2.Left)
		}
	}
	return isMirror(root.Left, root.Right)
}