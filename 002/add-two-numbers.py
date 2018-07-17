# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        dummy_head = ListNode(0)
        p, q, curr = l1, l2, dummy_head
        carry = 0
        while p is not None or q is not None:
            x = 0 if p is None else p.val
            y = 0 if q is None else q.val
            digit_sum = x + y + carry
            carry = int(digit_sum / 10)
            curr.next = ListNode(digit_sum % 10)
            curr = curr.next
            if p is not None:
                p = p.next
            if q is not None:
                q = q.next
        
        if carry > 0:
            curr.next = ListNode(carry)

        return dummy_head.next
