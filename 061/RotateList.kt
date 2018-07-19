class RotateList {

    fun rotateRight(head: ListNode?, k: Int): ListNode? {
        var anotherHead = head
        var anotherK = k
        if (anotherHead == null || anotherHead.next == null) {
            return head
        }

        var node = anotherHead
        var length = 1
        while (node?.next != null) {
            length++
            node = node.next
        }

        node?.next = anotherHead // Form a circle
        anotherK %= length

        for (i in 0 until length - anotherK) {
            node = node?.next
        }
        anotherHead = node?.next
        node?.next = null

        return anotherHead
    }

    data class ListNode(
            var `val`: Int,
            var next: ListNode? = null
    )

}