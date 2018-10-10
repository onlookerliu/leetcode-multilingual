class Solution:
    def letterCasePermutation(self, S):
        """
        :type S: str
        :rtype: List[str]
        """
        if len(S) == 0:
            return [S]
        if len(S) == 1:
            if S[0] >= '0' and S[0] <= '9':
                return [S]
            return [S.lower(), S.upper()]

        tails = self.letterCasePermutation(S[1:])
        res = []
        leading = []
        if S[0] >= '0' and S[0] <= '9':
            leading.append(S[:1])
        else:
            leading.append(S[:1].lower())
            leading.append(S[:1].upper())
        
        for i in range(len(leading)):
            for j in range(len(tails)):
                res.append(leading[i]+tails[j])

        return res


S = "a1b2"
print(Solution().letterCasePermutation(S))