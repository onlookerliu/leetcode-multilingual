class Solution {
    public:
    string crackSafe(int n, int k) {
        const int total_size = pow(k, n);
        string ans(n, '0');
        unordered_set<string> visited{ans};
        if (dfs(ans, total_size, n, k, visited))
            return ans;
        return "";
    }

    private:
    bool dfs(string& ans, const int total_size, const int n, const int k, unordered_set<string>& visited) {
        if (visited.size() == total_size)
            return true;
        
        string node = ans.substr(ans.length()-n+1, n-1);
        for (char c = '0'; c < '0' + k; ++c) {
            node.push_back(c);
            if (!visited.count(node)) {
                ans.push_back(c);
                visited.insert(node);
                if (dfs(ans, total_size, n, k, visited)) return true;
                visited.erase(node);
                ans.pop_back();
            }
            node.pop_back();
        }

        return false;
    }
};