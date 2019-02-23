#define CATCH_CONFIG_MAIN
#include "catch2/catch.hpp"
#include "reverse_integer.h"

TEST_CASE("reverse integer test 1", "reverse")
{
    Solution s;
    REQUIRE(s.reverse(123) == 321);
    REQUIRE(s.reverse(-123) == -321);
    REQUIRE(s.reverse(10100) == 101);
    REQUIRE(s.reverse(-2147483648) == 0);
}