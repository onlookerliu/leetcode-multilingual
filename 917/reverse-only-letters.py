class Solution:
    def reverseOnlyLetters(self, S):
        """
        :type S: str
        :rtype: str
        """
        letters = []
        N = len(S)
        for i, s in enumerate(S):
            if s.isalpha():
                letters.append(s)

        res = ""
        for i, s in enumerate(S):
            if s.isalpha():
                res += letters.pop()
            else:
                res += s
        return res



class Solution:
    def reverseOnlyLetters(self, S):
        """
        :type S: str
        :rtype: str
        """
        N = len(S)
        l = N - 1
        res = ""
        for i, s in enumerate(S):
            if s.isalpha():
                while not S[l].isalpha():
                    l -= 1
                res += S[l]
                l -= 1
            else:
                res += s
        return res
