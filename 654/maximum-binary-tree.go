package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func constructMaximumBinaryTree(nums []int) *TreeNode {
	stack := make([]*TreeNode, 1, len(nums))
	stack[0] = &TreeNode{Val: 1<<63 - 1}

	for _, n := range nums {
		node := &TreeNode{Val: n}
		if stack[len(stack)-1].Val > n {
			stack = append(stack, node)
			continue
		}

		for len(stack)-2 >= 0 && stack[len(stack)-2].Val < n {
			stack[len(stack)-2].Right = stack[len(stack)-1]
			stack = stack[:len(stack)-1]
		}

		node.Left = stack[len(stack)-1]

		stack[len(stack)-1] = node
	}

	for i := len(stack) - 1; 1 <= i; i-- {
		stack[i-1].Right = stack[i]
	}

	return stack[1]
}
