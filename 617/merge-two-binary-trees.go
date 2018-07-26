/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func mergeTrees(t1 *TreeNode, t2 *TreeNode) *TreeNode {
	if nil == t1 && nil == t2 {
		return nil
	}
	if nil != t1 && nil == t2 {
		return t1
	} else if nil == t1 && nil != t2 {
		return t2
	} else {
		ret := new(TreeNode)
		ret.Val = t1.Val + t2.Val
		ret.Left = mergeTrees(t1.Left, t2.Left)
		ret.Right = mergeTrees(t1.Right, t2.Right)
		return ret
	}
}