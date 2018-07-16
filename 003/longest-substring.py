class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        length = len(s)
        if length < 2:
            return length

        barrier = 0
        max_len = 1
        for i in range(1, length):
            for j in range(i-1, barrier-1, -1):
                if s[i] == s[j]:
                    barrier = j + 1
                    break

            max_len = max(max_len, i - barrier + 1)

        return max_len
