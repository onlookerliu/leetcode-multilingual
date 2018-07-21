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
var reverseList = function (head) {
    if (head === null || head.next === null)
        return head;

    let next = head.next;
    head.next = null;
    let newHead = reverseList(next);
    next.next = head;

    return newHead;
};

var reverseList = function (head) {
    let ans = [];

    while (head) {
        let node = new ListNode(head.val);
        ans.push(node);
        head = head.next;
    }

    ans.reverse();

    if (!ans.length)
        return null;

    for (let i = 0, len = ans.length; i < len - 1; i++) {
        ans[i].next = ans[i + 1];
    }

    return ans[0];
};

var reverseList = function (head) {
    let pre = null;
    let next;

    while (head) {
        next = head.next;

        head.next = pre;
        pre = head;

        head = next;
    }

    return pre;
};