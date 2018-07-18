/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */
object MergeKSortedLists {
    def mergeKLists(lists: Array[ListNode]): ListNode = {
        val q = collection.mutable.PriorityQueue.empty[ListNode](Ordering.by[ListNode, Int](_.x).reverse)
        lists.foreach(list => if (list != null) q += list)
        val res = new ListNode(-1)
        var p = res
        while (q.nonEmpty) {
            val head = q.dequeue()
            p.next = head
            p = p.next
            if (head.next != null)
                q += head.next
            head.next = null
        }
        res.next
    }
}