/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(headA, headB) {
    let nums1 = listToNumber(headA);
    let nums2 = listToNumber(headB);
    if (nums1.length == 0 && nums2.length == 0)
        return null;
    if (!nums1.length)
        return headB;
    if (!nums2.length)
        return headA;
    let nums = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = nums.length;
    let head = new ListNode(nums[0]);
    let curr = head;
    for (let i = 1; i < len; i++) {
        curr.next = new ListNode(nums[i]);
        curr = curr.next;
    }
    return head;
}

function listToNumber(head) {
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}