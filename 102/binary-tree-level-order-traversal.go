/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) (res [][]int) {
	if nil == root {
		return res
	}
	nodes := []*TreeNode{root}
	var vals []int
	for len(nodes) > 0 {
		nodes, vals = nextLevelNodesAndVals(nodes)
		res = append(res, vals)
	}
	return res
}

func nextLevelNodesAndVals(nodes []*TreeNode) (nextNodes []*TreeNode, vals []int) {
	for _, node := range nodes {
		if nil == node {
			continue
		}
		vals = append(vals, node.Val)
		if nil != node.Left {
			nextNodes = append(nextNodes, node.Left)
		}
		if nil != node.Right {
			nextNodes = append(nextNodes, node.Right)
		}
	}
	return nextNodes, vals
}