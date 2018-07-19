# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        dummy_head = ListNode(-1)
        dummy_head.next = head

        def loop(node):
            if node is not None and node.next is not None and node.next.next is not None:
                next_node = node.next
                node.next = next_node.next
                next_node.next = next_node.next.next
                node.next.next = next_node
                loop(next_node)
            else:
                return

        loop(dummy_head)
        return dummy_head.next