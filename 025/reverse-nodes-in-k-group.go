type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	start := head
	for i := 0; i < k; i++ {
		if head == nil {
			return start
		}
		head = head.Next
	}

	newHead := reverseGroup(start, head)
	start.Next = reverseKGroup(head, k)
	return newHead
}

func reverseGroup(start *ListNode, end *ListNode) *ListNode {
	var newHead, tmpHead *ListNode
	for start != end {
		tmpHead = start.Next
		start.Next = newHead
		newHead = start
		start = tmpHead
	}
	return newHead
}