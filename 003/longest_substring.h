#include <string>
using std::string;
#include <unordered_map>
using std::unordered_map;
#include <algorithm>
using std::max;

class Solution
{
  public:
    int lengthOfLongestSubstring(string s)
    {
        size_t res = 0, start = 0;
        unordered_map<char, size_t> trace;
        for (size_t i = 0; i < s.size(); ++i)
        {
            auto found = trace.find(s[i]);
            if (found != trace.end() && found->second >= start)
            {
                res = max(res, i - start);
                start = found->second + 1;
            }
            trace[s[i]] = i;
        }
        return max(res, s.size() - start);
    }
};