type ListNode struct {
	Val  int
	Next *ListNode
}

func oddEvenList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	// odd group's end
	oe := head
	// even group's begin
	eb := head.Next
	// even group's end
	ee := eb

	for ee != nil && ee.Next != nil {
		oe.Next = ee.Next
		oe = oe.Next
		ee.Next = oe.Next
		ee = ee.Next
		oe.Next = eb
	}

	return head
}