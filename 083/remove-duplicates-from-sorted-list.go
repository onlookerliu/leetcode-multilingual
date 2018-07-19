type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	curr := head
	ln := head

	for ln != nil {
		if curr.Val < ln.Val {
			curr.Next = ln
			curr = curr.Next
		}
		ln = ln.Next
	}

	if curr != nil {
		curr.Next = nil
	}
	return head
}