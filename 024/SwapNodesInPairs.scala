/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */
object Solution {
    def swapPairs(head: ListNode): ListNode = {
        val dummyHead = new ListNode(-1)
        dummyHead.next = head

        @annotation.tailrec
        def loop(node: ListNode): Unit = {
            if (node != null && node.next != null && node.next.next != null) {
                val nextNode = node.next
                node.next = nextNode.next
                nextNode.next = nextNode.next.next
                node.next.next = nextNode
                loop(nextNode)
            } else Unit
        }

        loop(dummyHead)
        dummyHead.next
    }
}