/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func nextDepthNode(nodeSlice []*TreeNode) (nextNodeSlice []*TreeNode) {
	for _, node := range nodeSlice {
		if nil != node.Left {
			nextNodeSlice = append(nextNodeSlice, node.Left)
		}
		if nil != node.Right {
			nextNodeSlice = append(nextNodeSlice, node.Right)
		}
	}
	return nextNodeSlice
}

func maxDepth(root *TreeNode) int {
	var maxDepth int
	if nil == root {
		return 0
	}

	nextNodeSlice := []*TreeNode{root}
	for len(nextNodeSlice) > 0 {
		maxDepth++
		nextNodeSlice = nextDepthNode(nextNodeSlice)
	}
	return maxDepth
}