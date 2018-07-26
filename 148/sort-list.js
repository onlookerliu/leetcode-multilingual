/**
 * Definition for singly-linked list.
 * function ListNode(val) 
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head)
        return null;
    let nodes = [];
    while (head) {
        let node = new ListNode(head.val);
        nodes.push(node);
        head = head.next;
    }

    nodes.sort((a, b) => a.val - b.val);
    for (let i = 0, len = nodes.length; i < len; i++) {
        nodes[i].next = nodes[i+1];
    }
    return nodes[0];
};