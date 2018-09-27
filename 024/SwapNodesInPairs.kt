/**
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int = 0) {
 *     var next: ListNode? = null
 * }
 */
class SwapNodesInPairs {
    fun swapPairs(head: ListNode?): ListNode? {
        var dummyHead = ListNode()
        dummyHead.next = head
        
        fun loop(node: ListNode?) {
            if (node != null && node.next != null && node.next.next != null) {
                var nextNode = node.next
                node.next = nextNode.next
                nextNode.next = nextNode.next.next
                node.next.next = nextNode
                loop(nextNode)
            } else return
        }
        
        loop(dummyHead)
        return dummyHead.next
    }
}

class SwapNodesInPairs {
    fun swapPairs(head: ListNode?): ListNode? {
        if (head == null) return null
        val second = head.next ?: return head
        head.next = swapPairs(second.next)
        second.next = head
        return second
    }
}