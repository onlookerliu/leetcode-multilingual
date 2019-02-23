#include <algorithm> // std::reverse std::swap
#include <vector>

using std::reverse;
using std::swap;
using std::vector;

class Solution
{
  public:
    void rotate_v1(vector<vector<int>> &matrix)
    {
        vector<vector<int>> tmp(matrix);
        int len = matrix.size();
        for (size_t i = 0; i < matrix.size(); ++i)
            for (size_t j = 0; j < matrix[0].size(); ++j)
                matrix[i][j] = tmp[len - j - 1][i];
    }

    void rotate_v2(vector<vector<int>> &matrix)
    {
        vector<vector<int>> tmp(matrix);
        int len = matrix.size();
        for (size_t i = 0; i < matrix.size(); ++i)
            for (size_t j = 0; j < matrix[0].size(); ++j)
                matrix[i][j] = tmp[len - j - 1][i];
    }

    void rotate(vector<vector<int>> &matrix)
    {
        reverse(matrix.begin(), matrix.end());
        for (size_t i = 0; i < matrix.size(); ++i)
            for (size_t j = i + 1; j < matrix[i].size(); ++j)
                swap(matrix[i][j], matrix[j][i]);
    }
};