# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        curr = head
        ln = head
        while ln is not None:
            if curr.val < ln.val:
                curr.next = ln
                curr = curr.next

            ln = ln.next

        if curr is not None:
            curr.next = None

        return head
