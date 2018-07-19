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
var deleteDuplicates = function (head) {
    let curr = head;
    let ln = head;
    while (ln != null) {
        if (curr.val < ln.val) {
            curr.next = ln;
            curr = curr.next;
        }
        ln = ln.next;
    }
    if (curr != null)
        curr.next = null;
    return head;
};