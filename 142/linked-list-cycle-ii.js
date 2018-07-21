/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head == null || head.next == null) {
        return null;
    }

    let slow = head, fast = head.next;

    while (fast != null && fast.next != null) {
        if (slow == fast) {
            let step = 0;
            while (fast.next != slow) {
                fast = fast.next;
                step += 1;
            }
            fast = head;
            slow = head;
            while (step >= 0) {
                fast = fast.next;
                step -= 1
            }
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        } else {
            slow = slow.next;
            fast = fast.next;
        }
    }
    return null;
};