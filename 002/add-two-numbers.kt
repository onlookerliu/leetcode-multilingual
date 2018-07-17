/**
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int = 0) {
 *     var next: ListNode? = null
 * }
 */

class ListNode(var `val`: Int = 0) {
    var next: ListNode? = null
}

class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        val dummyHead = ListNode()
        var curr: ListNode = dummyHead
        var p: ListNode? = l1
        var q: ListNode? = l2
        var digitSum: Int = 0
        var carry: Int = 0
        var x: Int
        var y: Int
        while (p != null || pb != null) {
            if (p != null) {
                x = p.val
            } else {
                x = 0
            }
            if (q != null) {
                y = q.val
            } else {
                y = 0
            }
            digitSum = x + y + carry
            carry = digitSum / 10
            curr.next = ListNode(digitSum % 10)
            curr = curr.next
        }
        if (carry > 0) {
            curr.next = ListNode(carry)
        }
        return dummyHead.next!!
    }
}
