type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	result := &ListNode{
		Val: 0,
	}
	dummyHead := result

	for l1 != nil && l2 != nil {
		if l1.Val <= l2.Val {
			result.Next = &ListNode{
				Val: l1.Val,
			}
			l1 = l1.Next
		} else {
			result.Next = &ListNode{
				Val: l2.Val,
			}
			l2 = l2.Next
		}
		result = result.Next
	}

	if l1 == nil {
		result.Next = l2
	} else {
		result.Next = l1
	}

	return dummyHead.Next
}