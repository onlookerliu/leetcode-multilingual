/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */

class ListNode(var _x: Int = 0) {
    var next: ListNode = null
    var x: Int = _x
}

object MergeTwoSortedLists {
    def mergeTwoLists(l1: ListNode, l2: ListNode): ListNode = {
        val dummyHead = new ListNode(0)
        var p = dummyHead
        var lr1 = l1
        var lr2 = l2
        while (lr1 != null && lr2 != null) {
            if (lr1._x < lr2._x) {
                p.next = lr1
                lr1 = lr1.next
            } else {
                p.next = lr2
                lr2 = lr2.next
            }
            p = p.next
        }
        
        if (lr1 != null)
            p.next = lr1
        if (lr2 != null)
            p.next = lr2
        dummyHead.next
    }
}