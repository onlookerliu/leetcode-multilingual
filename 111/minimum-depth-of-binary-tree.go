/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDepth(root *TreeNode) int {
    res := 0

	func dfs(root *TreeNode, depth int) {
		if nil == root {
			return
		}
		if res != 0 && depth >= res {
			return
		}
		if nil == root.Left && nil == root.Right {
			res = depth
			return
		}
		if nil != root.Left {
			dfs(root.Left, depth+1)
		}
		if nil != root.Right {
			dfs(root.Right, depth+1)
		}
	}

	dfs(root, 1)
	return res
}