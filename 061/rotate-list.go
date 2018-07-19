/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	node := head
	size := 1
	for node.Next != nil {
		size += 1
		node = node.Next
	}

	node.Next = head
	k %= size

	for i := 0; i < size-k; i++ {
		node = node.Next
	}
	head = node.Next
	node.Next = nil
	return head
}