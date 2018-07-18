type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	if head.Next == nil {
		return nil
	}
	q, p := head, head
	for n > 0 {
		p = p.Next
		n -= 1
	}
	if p == nil {
		return head.Next
	}
	for p.Next != nil {
		p = p.Next
		q = q.Next
	}
	q.Next = q.Next.Next
	return head
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	stack := make([]*ListNode, 0)
	var tmp *ListNode
	node := head

	for ; node != nil; node = node.Next {
		stack = append(stack, node)
	}

	for ; n > 0 && len(stack) != 0; n-- {
		tmp = stack[len(stack)-1]
		stack = removeIndex(stack, len(stack)-1)
	}

	if tmp != nil {
		if len(stack) != 0 {
			stack[len(stack)-1].Next = tmp.Next
		} else {
			head = tmp.Next
		}
	}

	return head
}

func removeIndex(s []*ListNode, index int) []*ListNode {
	return append(s[:index], s[index+1:]...)
}