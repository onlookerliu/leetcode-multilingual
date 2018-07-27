/**
 * Solution
 */
public class Solution {

    public String longestPalindrome(String s) {
        String res = "";
        if (s == null || s.length() == 0)
            return res;
        int maxLen = 0;
        boolean[][] palindromeQ = new boolean[s.length()][s.length()];
        for (int i = s.length() - 1; i >= 0; i--) {
            for (int j = i + 1; j < s.length(); j++) {
                if (s.charAt(i) == s.charAt(j) && (j-i <= 2 || palindromeQ[i+1][j-1])) {
                    palindromeQ[i][j] = true;
                    if (j - i + 1 > maxLen) {
                        maxLen = j - i + 1;
                        res = s.substring(i, j+1);
                    }
                }
            }
        }
        return res;
    }

    public static void main(String[] args) {
        String s = "babad";
        Solution sol = new Solution();
        System.out.println(sol.longestPalindrome(s));
    }
}