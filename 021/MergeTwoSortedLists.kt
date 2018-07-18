/**
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int = 0) {
 *     var next: ListNode? = null
 * }
 */
class MergeTwoSortedLists {
    fun mergeTwoLists(l1: ListNode?, l2: ListNode?): ListNode? {
        if (l1 == null)
            return l2
        if (l2 == null)
            return l1
        val re: ListNode
        if (l1.`val` < l2.`val`) {
            re = l1
            re.next = mergeTwoLists(l1.next, l2)
        } else {
            re = l2
            re.next = mergeTwoLists(l1, l2.next)
        }
        return re
    }
}