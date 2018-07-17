class Solution:
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if len(strs) == 0:
            return ""
        
        def loop(i):
            if i == len(strs[0]):
                return i

            c = strs[0][i]
            for str in strs:
                if len(str) == i or str[i] != c:
                    return i

            return loop(i+1)

        longestCommonPrefixLength = loop(0)
        return strs[0][0:longestCommonPrefixLength]

strs = ["flower", "flow", "flight"]
print(Solution().longestCommonPrefix(strs))