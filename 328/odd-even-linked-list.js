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
var oddEvenList = function (head) {
    if (head == null) {
        return head;
    }

    let oe = head;
    let eb = head.next;
    let ee = eb;

    while (ee != null && ee.next != null) {
        oe.next = ee.next;
        oe = oe.next;
        ee.next = oe.next;
        ee = ee.next;
        oe.next = eb;
    }

    return head;
};