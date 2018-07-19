/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */

public class ReverseNodesInKGroups {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1)
            return head;
        ListNode node = new ListNode(0), pre = node;
        node.next = head;
        for (int i = 1; head != null; ++i) {
            if (i % k == 0) {
                pre = reverse(pre, head.next);
                head = pre.next;
            } else {
                head = head.next;
            }
        }
        return node.next;
    }

    private ListNode reverse(ListNode pre, ListNode next) {
        ListNode head = pre.next;
        ListNode move = head.next;
        while (move != next) {
            head.next = move.next;
            move.next = pre.next;
            pre.next = move;
            move = head.next;
        }
        return head;
    }

}