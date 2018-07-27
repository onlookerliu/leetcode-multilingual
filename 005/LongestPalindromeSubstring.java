/**
 * LongestPalindromeSubstring
 */
public class LongestPalindromeSubstring {

    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0)
            return "";
        int maxLen = 0;
        String res = "";
        for (int i = 0; i < 2*s.length()-1; i++) {
            int left = i / 2;
            int right = i / 2;
            if (i % 2 == 1) right++;
            String str = searchPalindrome(s, left, right);
            if (str.length() > maxLen) {
                maxLen = str.length();
                res = str;
            }
        }
        return res;
    }
    
    private String searchPalindrome(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return s.substring(left+1, right);
    }

    public static void main(String[] args) {
        LongestPalindromeSubstring sol = new LongestPalindromeSubstring();
        String s = "babad";
        System.out.println(sol.longestPalindrome(s));
    }
}