/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	dummyHead := &ListNode{-1, head}

	var loop func(*ListNode)
	loop = func(node *ListNode) {
		if node != nil && node.Next != nil && node.Next.Next != nil {
			nextNode := node.Next
			node.Next = nextNode.Next
			nextNode.Next = nextNode.Next.Next
			node.Next.Next = nextNode
			loop(nextNode)
		} else {
			return
		}
	}

	loop(dummyHead)
	return dummyHead.Next
}