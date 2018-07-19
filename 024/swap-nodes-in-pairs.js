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
var swapPairs = function (head) {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;

    function loop(node) {
        if (node != null && node.next != null && node.next.next != null) {
            let nextNode = node.next;
            node.next = nextNode.next;
            nextNode.next = nextNode.next.next;
            node.next.next = nextNode;
            loop(nextNode);
        } else return;
    }

    loop(dummyHead);
    return dummyHead.next;
};