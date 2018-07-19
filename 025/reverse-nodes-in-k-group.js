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
var reverseKGroup = function (head, k) {
    let nodes = [];

    while (head) {
        nodes.push(new ListNode(head.val));
        head = head.next;
    }

    let len = nodes.length;

    if (!len)
        return null;

    let res = [];

    for (let i = 0; i < len; i += k) {
        let tmp;

        if (i + k > len) {
            tmp = nodes.slice(i, len);
        } else {
            tmp = nodes.slice(i, i + k);
            tmp.reverse();
        }

        Array.prototype.push.apply(res, tmp);
    }

    for (let i = 0, len = res.length; i < len - 1; i++) {
        res[i].next = res[i + 1];
    }

    return res[0];
};