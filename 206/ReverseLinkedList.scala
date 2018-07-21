object ReverseLinkedList {
  def reverseList(head: ListNode): ListNode = {
    @annotation.tailrec
    def reverseList(head: ListNode, reverse: ListNode): ListNode = {
      if (head == null) reverse
      else {
        val tail = head.next
        head.next = reverse
        reverseList(tail, head)
      }
    }

    reverseList(head, null)
  }

  class ListNode(var _x: Int = 0) {
    var x: Int = _x
    var next: ListNode = null
  }

}
