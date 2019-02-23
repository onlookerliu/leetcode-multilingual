#define CATCH_CONFIG_MAIN
#include "catch2/catch.hpp"
#include "two_sum.h"

using std::vector;

TEST_CASE("two sum test 1", "twoSum")
{
    Solution s;
    vector<int> v1{2, 7, 11, 15};
    REQUIRE(s.twoSum(v1, 9) == vector<int>{0, 1});

    vector<int> v2{0, 4, 3, 0};
    REQUIRE(s.twoSum(v2, 0) == vector<int>{0, 3});

    vector<int> v3{-3, 4, 3, 90};
    REQUIRE(s.twoSum(v3, 0) == vector<int>{0, 2});
}