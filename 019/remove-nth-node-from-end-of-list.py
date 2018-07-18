# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        if head.next == None:
            return None
        q, p = head, head
        while n > 0:
            p = p.next
            n -= 1
        if p is None:
            return head.next
        while p.next is not None:
            p = p.next
            q = q.next
        q.next = q.next.next
        return head
