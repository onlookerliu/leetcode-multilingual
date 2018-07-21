/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    let hash = new Set();
    while (head != null) {
        if (hash.has(head)) {
            return true;
        } else {
            hash.add(head);
        }
        head = head.next;
    }
    return false;
}