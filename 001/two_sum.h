#include <vector>
#include <unordered_map>

using std::unordered_map;
using std::vector;

class Solution
{
  public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> record;
        for (int i = 0; i != nums.size(); ++i)
        {
            auto found = record.find(nums[i]);
            if (found != record.end())
                return {found->second, i};
            record.emplace(target - nums[i], i);
        }
        return {-1, -1};
    }
};