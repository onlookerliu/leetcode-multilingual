class Solution {
    public:
    vector<int> postorder(Node* root) {
        if (!root) return {};
        vector<int> ans;
        stack<Node*> s;
        s.push(root);
        while (!s.empty()) {
            const Node* node = s.top();
            s.pop();
            ans.push_back(node->val);
            for (auto child: node->children)
                s.push(child);
        }
        reverse(begin(ans), end(ans));
        return ans;
    }
};

class Solution {
    public:
    vector<int> postorder(Node* root) {
        vector<int> ans;
        postorder(root, ans);
        return ans;
    }
    private:
    void postorder(Node* root, vector<int>& ans) {
        if (!root) return;
        for (auto child: root->children)
            postorder(child, ans);
        ans.push_back(root->val);
    }
};