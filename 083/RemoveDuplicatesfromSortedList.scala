object RemoveDuplicatesfromSortedList {
  def deleteDuplicates(head: ListNode): ListNode = {
    @annotation.tailrec
    def delete(head: ListNode): ListNode =
      if (null == head || head.next == null) head
      else if (head.x == head.next.x) {
        head.next = head.next.next
        delete(head)
      } else delete(head.next)

    delete(head)
    head
  }

  class ListNode(var _x: Int = 0) {
    var next: ListNode = null
    var x: Int = _x
  }

}
