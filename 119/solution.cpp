class Solution {
    public:
    vector<int> getRow(int rowIndex) {
        vector<int> out;
        if (rowIndex < 0) return out;

        out.assign(rowIndex+1, 0);
        for (int i = 0; i <= rowIndex; ++i) {
            if (i == 0) {
                out[0] = 1;
                continue;
            }

            for (int j = rowIndex; j >= 1; --j) {
                out[j] = out[j] + out[j-1];
            }
        }
        return out;
    }
};