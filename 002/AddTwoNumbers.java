/**
 * Definition for singly-linked list. 
 * public class ListNode {
 *     int val; 
 *     ListNode next; 
 *     ListNode(int x) { val = x; } 
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode p = l1, q = l2, dummyHead = new ListNode(0), curr = dummyHead;
        int carry = 0;
        int x, y, sum = 0;
        while (p != null || q != null) {
            x = (p != null) ? p.val : 0;
            y = (q != null) ? q.val : 0;
            sum = x + y + carry;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dummyHead.next;
    }
}