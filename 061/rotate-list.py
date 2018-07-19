# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def rotateRight(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        if head is None or head.next is None:
            return head

        node = head
        length = 1
        while node.next is not None:
            length += 1
            node = node.next

        node.next = head
        k %= length

        for i in range(length-k):
            node = node.next

        head = node.next
        node.next = None
        return head



class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

    def __eq__(self, other):
        return self.val == other.val and self.next == other.next
