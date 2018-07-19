/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class RemoveDuplicatesfromSortedList {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode current = head, ln = head;
        while (ln !=null) {
            if (current.val < ln.val) current = current.next = ln;
            ln = ln.next;
        }
        if (current != null) current.next = null;
        return head;
    }
}