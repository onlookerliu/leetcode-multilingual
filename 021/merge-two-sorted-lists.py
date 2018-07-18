class MergeTwoSortedLists:
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        result = ListNode(0)
        dummyHead = result

        while l1 is not None and l2 is not None:
            if l1.val <= l2.val:
                result.next = ListNode(l1.val)
                l1 = l1.next
            elif l1.val > l2.val:
                result.next = ListNode(l2.val)
                l2 = l2.next
            result = result.next

        if l1 is None:
            result.next = l2
        else:
            result.next = l1

        return dummyHead.next


class ListNode():
    def __init__(self, x):
        self.val = x
        self.next = None

    def __eq__(self, other):
        return self.val == other.val and self.next == other.next
