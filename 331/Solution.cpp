class Solution {
    public:
    bool isValidSerialization(string preorder) {
        istringstream in(preorder);
        vector<string> v;
        string t = "";
        int cnt = 0;
        while (getline(in, t, ',')) v.push_back(t);
        for (int i = 0; i < v.size() - 1; ++i) {
            if (v[i] == "#") {
                if (cnt == 0) return false;
                --cnt;
            } else ++cnt;
        }
        return cnt == 0 && v.back() == "#";
    }
};

class Solution {
    public:
    bool isValidSerialization(string preorder) {
        istringstream in(preorder)
        string t = "";
        int degree = 1;
        bool degree_is_zero = false;
        while (getline(in, t, ',')) {
            if (degree_is_zero) return false;
            if (t == "#") {
                if (--degree == 0) degree_is_zero = true;
            } else ++degree;
        }
        return degree == 0;
    }
};

class Solution {
    public:
    bool isValidSerialization(string preorder) {
        int capacity = 1;
        preorder += ",";
        for (int i = 0; i < preorder.size(); ++i) {
            if (preorder[i] != ',') continue;
            if (--capacity < 0) return false;
            if (preorder[i-1] != "#") capacity += 2;
        }
        return capacity == 0;
    }
}