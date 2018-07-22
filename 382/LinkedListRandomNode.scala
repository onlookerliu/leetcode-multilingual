object LinkedListRandomNode {
  /**
    * Definition for singly-linked list.
    */
  class ListNode(var _x: Int = 0) {
    var next: ListNode = null
    var x: Int = _x
  }

  class Solution(_head: ListNode) {

    /** @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node. */


    /** Returns a random node's value. */
    def getRandom(): Int = {
      @annotation.tailrec
      def loop(head: ListNode, count: Int, res: Int): Int =
        if (head == null) res
        else {
          if (util.Random.nextInt(count) == 0) loop(head.next, count + 1, head.x)
          else loop(head.next, count + 1, res)
        }

      loop(_head, 1, -1)
    }

  }

  /**
    * Your Solution object will be instantiated and called as such:
    * var obj = new Solution(head)
    * var param_1 = obj.getRandom()
    */

}
