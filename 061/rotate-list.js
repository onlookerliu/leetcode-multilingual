/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next)
        return head;

    let node = head;
    let len = 1;
    while (node.next) {
        len += 1;
        node = node.next;
    }

    node.next = head
    k %= len

    for (let i = 0; i < len - k; i++)
        node = node.next;

    head = node.next;
    node.next = null;
    return head;
};