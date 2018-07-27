/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findMode(root *TreeNode) []int {
	var res []int
	var maxCount = 1
	var currCount = 0
	var pre *TreeNode

	var dfs func(*TreeNode)
	dfs = func(root *TreeNode) {
		if root == nil {
			return
		}
		dfs(root.Left)
		if nil != pre && root.Val == pre.Val {
			currCount++
		} else {
			currCount = 1
		}
		if currCount == maxCount {
			res = append(res, root.Val)
		}
		if currCount > maxCount {
			maxCount = currCount
			res = res[:0]
			res = append(res, root.Val)
		}
		pre = root
		dfs(root.Right)
	}

	dfs(root)
	return res
}