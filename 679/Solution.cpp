class Solution {
    bool jp2(double a, double b) {
        return (abs(a + b - 24) < 1e-10) || (abs(a - b - 24) < 1e-10) || (abs(a * b - 24) < 1e-10) || (b != 0 && (abs(a / b - 24) < 1e-10)) || (abs(b - a - 24)<1e-10) || (a != 0 && (abs(b / a - 24)<1e-10));
    }

    bool jp3(double a, double b, double c) {
        return jp2(a + b, c) || jp2(a - b, c) || jp2(a * b, c) || (b != 0 && jp2(a / b, c)) || jp2(b - a, c) || (a != 0 && jp2(b / a, c)) \
            || jp2(c + b, a) || jp2(c - b, a) || jp2(c * b, a) || (b != 0 && jp2(c / b, a)) || jp2(b - c, a) || (c != 0 && jp2(b / c, a)) \
            || jp2(a + c, b) || jp2(a - c, b) || jp2(a * c, b) || (c != 0 && jp2(a / c, b)) || jp2(c - a, b) || (a != 0 && jp2(c / a, b));
    }
public:
    bool judgePoint24(vector<int>& nums) {
        double a = nums[0], b = nums[1], c = nums[2], d = nums[3];
        return jp3(a + b, c, d) || jp3(a - b, c, d) || jp3(a * b, c, d) || (b != 0 && jp3(a / b, c, d)) || jp3(b - a, c, d) || (a != 0 && jp3(b / a, c, d)) \
            || jp3(c + b, a, d) || jp3(c - b, a, d) || jp3(c * b, a, d) || (b != 0 && jp3(c / b, a, d)) || jp3(b - c, a, d) || (c != 0 && jp3(b / c, a, d)) \
            || jp3(a + c, b, d) || jp3(a - c, b, d) || jp3(a * c, b, d) || (c != 0 && jp3(a / c, b, d)) || jp3(c - a, b, d) || (a != 0 && jp3(c / a, b, d)) \
            || jp3(a + d, c, b) || jp3(a - d, c, b) || jp3(a * d, c, b) || (d != 0 && jp3(a / d, c, b)) || jp3(d - a, c, b) || (a != 0 && jp3(d / a, c, b)) \
            || jp3(d + b, a, c) || jp3(d - b, a, c) || jp3(d * b, a, c) || (b != 0 && jp3(d / b, a, c)) || jp3(b - d, a, c) || (d != 0 && jp3(b / d, a, c)) \
            || jp3(d + c, b, a) || jp3(d - c, b, a) || jp3(d * c, b, a) || (c != 0 && jp3(d / c, b, a)) || jp3(c - d, b, a) || (d != 0 && jp3(c / d, b, a));
    }
};