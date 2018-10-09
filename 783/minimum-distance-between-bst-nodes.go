/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func dfs(node *TreeNode, values *[]int) {
	if node == nil {
		return
	}

	dfs(node.Left, values)
	*values = append(*values, node.Val)
	dfs(node.Right, values)
}
func minDiffInBST(root *TreeNode) int {
	vals := []int{}
	dfs(root, &vals)
	minDiff := vals[1] - vals[0]
	for i := 1; i < len(vals); i++ {
		if vals[i]-vals[i-1] < minDiff {
			minDiff = vals[i] - vals[i-1]
		}
	}
	return minDiff
}