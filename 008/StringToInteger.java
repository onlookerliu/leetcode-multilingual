public class StringToInteger {
    public int myAtoi(String str) {
        int i = 0, ans = 0, sign = 1, len = str.length();
        while (i < len && str.charAt(i) == ' ')
            ++i;
        if (i < len && (str.charAt(i) == '-' || str.charAt(i) == '+')) {
            sign = str.charAt(i++) == '+' ? 1 : -1;
        }
        for (; i < len; ++i) {
            int tmp = str.charAt(i) - '0';
            if (tmp < 0 || tmp > 9)
                break;
            if (ans > Integer.MAX_VALUE / 10 || ans == Integer.MAX_VALUE / 10 && Integer.MAX_VALUE % 10 < tmp)
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            else
                ans = ans * 10 + tmp;
        }
        return sign * ans;
    }
}