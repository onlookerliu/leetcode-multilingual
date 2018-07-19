/**
 * Definition for singly-linked list.
 * class ListNode(var _x: Int = 0) {
 *   var next: ListNode = null
 *   var x: Int = _x
 * }
 */
object RotateList {
    def rotateRight(head: ListNode, k: Int): ListNode = {
        var anotherHead = head
        var anotherK = k
        if (anotherHead == null || anotherHead.next == null) head
        var node = anotherHead
        var size = 1
        while (node.next != null) {
            size += 1
            node = node.next
        }
        node.next = anotherHead
        anotherK %= size

        for (i <- 0 until size-anotherK) node = node.next
        anotherHead = node.next
        node.next = null
        anotherHead
    }
}