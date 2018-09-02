class Solution {
    public:
    ListNode* middleNode(ListNode* head) {
        if (!head || !head->next) return head;
        auto slow = head;
        auto fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};