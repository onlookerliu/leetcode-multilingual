class Solution:
    def subarrayBitwiseORs(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        cur = set()
        ans = set()
        for a in A:
            cur = {a | b for b in cur} | {a}
            ans |= cur
        return len(ans)