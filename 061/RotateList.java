public class RotateList {

    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }
        int len = 1;
        ListNode cur = head;
        for (; cur.next != null; cur = cur.next, len++)
            ;
        cur.next = head;
        for (int i = 0; i < len - k % len; ++i, cur = cur.next)
            ;
        head = cur.next;
        cur.next = null;
        return head;
    }

}