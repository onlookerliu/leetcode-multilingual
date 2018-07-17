class Solution {
    public int lengthOfLongestSubstring(String s) {
        int len = s.length();
        if (len < 2) {
            return len;
        }

        int barrier = 0;
        int maxLen = 1;
        for (int i = 0; i < len; i++) {
            for (int j = i - 1; j >= barrier; j--) {
                if (s.charAt(i) == s.charAt(j)) {
                    barrier = j+1;
                    break;
                }
            }
            maxLen = Math.max(maxLen, i - barrier + 1);
        }
        return maxLen;
    }
}