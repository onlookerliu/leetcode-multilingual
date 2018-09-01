class Solution {
    public:
    vector<int> preorder(Node* root) {
        vector<int> ans;
        preorder(root, ans);
        return ans;
    }
    private:
    void preorder(Node* root, vector<int>& ans) {
        if (!root) return;
        ans.push_back(root->val);
        for (const auto& child : root->children)
            preorder(child, ans);
    }
};


class Solution {
    public:
    vector<int> preorder(Node* root) {
        if (!root) return {};
        vector<int> ans;
        stack<Node*> s;
        s.push(root);
        while (!s.empty()) {
            const Node* node = s.top();
            s.pop();
            ans.push_back(node->val);
            for (auto it = node->children.rbegin(); it != node->children.rend(); ++it)
                s.push(*it);
        }
        return ans;
    }
};