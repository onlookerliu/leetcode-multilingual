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