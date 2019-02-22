#define CATCH_CONFIG_MAIN
#include "rotate_image.h"
#include "catch2/catch.hpp"

using std::vector;

TEST_CASE("rotate image test 1", "rotate")
{
    Solution s;
    vector<vector<int>> input{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    vector<vector<int>> expected{{7, 4, 1}, {8, 5, 2}, {9, 6, 3}};
    s.rotate_v1(input);
    REQUIRE(input == expected);
}

TEST_CASE("rotate image test 2", "rotate")
{
    Solution s;
    vector<vector<int>> input{{5, 1, 9, 11}, {2, 4, 8, 10}, {13, 3, 6, 7}, {15, 14, 12, 16}};
    vector<vector<int>> expected{{15, 13, 2, 5}, {14, 3, 4, 1}, {12, 6, 8, 9}, {16, 7, 10, 11}};
    s.rotate(input);
    REQUIRE(input == expected);
}
