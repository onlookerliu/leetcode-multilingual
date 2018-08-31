package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sumOfLeftLeaves(root *TreeNode) int {
	var loop func(*TreeNode, bool) int
	loop = func(root *TreeNode, isLeft bool) int {
		if root == nil {
			return 0
		} else if root.Left == nil && root.Right == nil && isLeft {
			return root.Val
		} else {
			return loop(root.Left, true) + loop(root.Right, false)
		}
	}

	return loop(root, false)
}
