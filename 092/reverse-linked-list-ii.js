/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let reverseBetween = function(head, m, n) {
    let nodes = [];

    while (head) {
        nodes.push(new ListNode(head.val));
        head = head.next;
    }

    m -= 1;
    n -= 1;

    for (let i = m, mid = (n+m) >> 1; i <= mid; i++) {
        let a = i;
        let b = m + n - a;
        let tempNode = nodes[a];
        nodes[a] = nodes[b];
        nodes[b] = tempNode;
    }
    for (let i = 0, len = nodes.length; i < len - 1; i++)
        nodes[i].next = nodes[i + 1];
    
    return nodes[0];
}