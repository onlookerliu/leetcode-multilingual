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
var insertionSortList = function (head) {
    let ans = [];
    while (head) {
        ans.push(new ListNode(head.val));
        head = head.next;
    }

    if (!ans.length) return null;
    ans.sort((node1, node2) => node1.val - node2.val);
    for (let i = 0, len = ans.length; i < len - 1; i++) {
        ans[i].next = ans[i + 1];
    }

    return ans[0];
};