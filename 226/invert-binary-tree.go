/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(root *TreeNode) *TreeNode {
	if nil == root {
		return nil
	}
	if nil != root.Left {
		invertTree(root.Left)
	}
	if nil != root.Right {
		invertTree(root.Right)
	}
	root.Left, root.Right = root.Right, root.Left
	return root
}