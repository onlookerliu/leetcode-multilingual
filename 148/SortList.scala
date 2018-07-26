object SortList {
  class ListNode(val _x: Int = 0) {
    var x: Int = _x
    var next: ListNode = null
  }

  def sortList(head: ListNode): ListNode = {
    if (head == null) return null
    else {
      var curr = head
      var nodes = List.empty[ListNode]
      while (curr != null) {
        val node = new ListNode(curr.x)
        nodes = nodes :+ node
        curr = curr.next
      }

      nodes.sortBy(node => node.x)
      for (i <- 0 until nodes.length-1)
        nodes(i).next = nodes(i+1)
      nodes(0)
    }

  }

  def main(args: Array[String]): Unit = {
    val four = new ListNode(4)
    val two = new ListNode(2)
    val one = new ListNode(1)
    val three = new ListNode(3)
    one.next = three
    two.next = one
    four.next = two
    println(sortList(four).x)
  }

}
