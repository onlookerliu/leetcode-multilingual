#define CATCH_CONFIG_MAIN
#include "catch2/catch.hpp"
#include "longest_substring.h"

TEST_CASE("longest substring without repeating characters test 1", "lengthOfLongestSubstring")
{
    Solution s;
    REQUIRE(s.lengthOfLongestSubstring("abcabcbb") == 3);
    REQUIRE(s.lengthOfLongestSubstring("bbbbb") == 1);
    REQUIRE(s.lengthOfLongestSubstring("a") == 1);
    REQUIRE(s.lengthOfLongestSubstring("pwwkew") == 3);
}