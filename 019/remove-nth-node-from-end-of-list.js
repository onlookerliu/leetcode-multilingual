/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let curr = head;
    let count = head;
    while (n) {
        count = count.next;
        n--;
    }
    if (!count) {
        head = head.next;
        curr.next = null;
        return head;
    }
    if (!count.next) {
        let temp = curr.next;
        curr.next = curr.next.next;
        temp.next = null;
        return head;
    }
    while (count.next) {
        curr = curr.next;
        count = count.next;
    }
    let temp = curr.next;
    curr.next = curr.next.next ? curr.next.next : null;
    temp.next = null;
    return head;
};

var removeNthFromEnd = function (head, n) {
    if (head.next == null)
        return null;
    let q = head, p = head;
    while (n > 0) {
        p = p.next;
        n -= 1;
    }

    if (p == null)
        return head.next;
    while (p.next != null) {
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return head;
};