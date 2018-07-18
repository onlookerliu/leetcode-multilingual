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


class GenerateParentheses:
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        m_set = set()

        if n <= 0:
            return list(m_set)
        if n == 1:
            m_set.add("()")
            return list(m_set)

        for s in self.generateParenthesis(n - 1):
            string = ""
            chars = list(s)
            for j in range(len(chars)):
                string += chars[j]
                if chars[j] == '(':
                    builder = "" + string
                    builder += "()"
                    for k in range(j + 1, len(chars)):
                        builder += chars[k]
                    m_set.add(builder)
            m_set.add(s + "()")

        return list(m_set)
