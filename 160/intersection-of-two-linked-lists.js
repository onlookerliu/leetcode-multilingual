/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);

    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }

    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    while (headA && headB) {
        if (headA == headB)
            return headA;
        headA = headA.next;
        headB = headB.next;
    }

    return null;
};

function getLength(head) {
    if (!head)
        return 0;

    let i = 0;
    while (head) {
        i++;
        head = head.next;
    }
    return i;
}