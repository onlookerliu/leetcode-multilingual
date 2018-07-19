/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSubtree(s *TreeNode, t *TreeNode) bool {
	if s == nil && t == nil {
		return true
	} else {
		if isSameTree(s, t) {
			return true
		} else if s.Left != nil && s.Right != nil {
			return isSubtree(s.Left, t) || isSubtree(s.Right, t)
		} else if s.Left != nil {
			return isSubtree(s.Left, t)
		} else if s.Right != nil {
			return isSubtree(s.Right, t)
		} else {
			return false
		}
	}
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
	if p != nil && q != nil {
		if p.Val == q.Val {
			return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
		} else {
			return false
		}
	} else if p == nil && q == nil {
		return true
	} else {
		return false
	}
}