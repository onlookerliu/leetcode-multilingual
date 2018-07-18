import java.util.Stack

class RemoveNthNodeFromEndOfList {

    fun removeNthFromEnd(head: ListNode?, n: Int): ListNode? {
        var first = head
        var m = n
        val stack = Stack<ListNode>()
        var tmp: ListNode? = null
        var node = head

        while (node != null) {
            stack.push(node)
            node = node.next
        }

        while (m > 0 && !stack.empty()) {
            tmp = stack.pop()
            m--
        }

        if (tmp != null) {
            if (!stack.empty()) {
                stack.peek().next = tmp.next
            } else {
                first = tmp.next
            }
        }

        return first
    }

    data class ListNode(
            private var `val`: Int,
            var next: ListNode? = null
    )

}