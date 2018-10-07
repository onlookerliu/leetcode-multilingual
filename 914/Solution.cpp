class Solution {
public:
    bool hasGroupSizeX(vector<int>& deck) {
        unordered_map<int, int> counts;
        for (int card : deck) ++counts[card];
        for (int i = 2; i <= deck.size(); ++i) {
            if (deck.size() % i) continue;
            bool ok = true;
            for (const auto& pair : counts) {
                if (pair.second % i) {
                    ok = false;
                    break;
                }
            }
            if (ok) return true;
        }
        return false;
    }
};

class Solution {
public:
    bool hasGroupSizeX(vector<int>& deck) {
        unordered_map<int, int> counts;
        for (int card : deck) ++counts[card];
        int X = deck.size();
        for (const auto& p : counts)
            X = __gcd(X, p.second);
        return X >= 2;
    }
}