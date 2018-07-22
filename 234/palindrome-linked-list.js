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
var isPalindrome = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let len = arr.length;
    for (let i = 0, half = len >> 1; i < half; i++) {
        if (arr[i] != arr[len - 1 - i])
            return false;
    }
    return true;
};