class Solution:
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        ans = []

        def dfs(s, left, right, n):
            if left == n and right == n:
                ans.append(s)
                return

            if left + 1 <= n:
                dfs(s + '(', left + 1, right, n)

            if right + 1 <= n and right + 1 <= left:
                dfs(s + ')', left, right + 1, n)

        dfs('', 0, 0, n)
        return ans
