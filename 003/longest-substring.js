function lengthOfLongestSubstring(s) {
    if (s.length == 0) {
        return 0;
    }
    if (s.length == 1) {
        return 1;
    }
    let barrier = 0;
    let maxLen = 1;
    for (let i = 1; i < s.length; i++) {
        for (let j = i-1; j >= barrier; j--) {
            if (s[i] == s[j]) {
                barrier = j+1;
                break;
            }
        }
        maxLen = Math.max(maxLen, i-barrier+1);
    }
    return maxLen;
}