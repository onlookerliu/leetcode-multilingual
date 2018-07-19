# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def reverseKGroup(self, head, k):
        """
        :type head: ListNode
        :type k: int
        :rtype: ListNode
        """
        nodes = []

        while head is not None:
            nodes.append(ListNode(head.val))
            head = head.next

        length = len(nodes)

        if length == 0:
            return None

        res = []
        for i in range(0, length, k):
            if i + k > length:
                tmp = nodes[i:length]
            else:
                tmp = nodes[i: i+k]
                tmp = tmp[::-1]

            res = res + tmp

        for i in range(0, len(res)-1):
            res[i].next = res[i+1]

        return res[0]
