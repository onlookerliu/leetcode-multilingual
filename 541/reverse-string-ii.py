class Solution:
    def reverseStr(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        tmp = []
        ans = []
        for i in range(len(s)):
            if (i % (2*k) < k):
                tmp.append(s[i])
                continue
            while len(tmp) > 0:
                ans.append(tmp.pop())
            ans.append(s[i])

        while len(tmp) > 0:
            ans.append(tmp.pop())

        return ''.join(ans)
