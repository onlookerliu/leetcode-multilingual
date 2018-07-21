/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    let data = [];

    while (head) {
        data.push(new ListNode(head.val));
        head = head.next;
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i].val == val) {
            data.splice(i, 1);
            i = i - 1;
        }
    }

    let len = data.length;
    if (len == 0)
        return null;

    for (let i = 0; i < len - 1; i++) {
        data[i].next = data[i + 1]
    }

    return data[0];

}
