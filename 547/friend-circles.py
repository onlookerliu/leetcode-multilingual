class Solution:
    def findCircleNum(self, M):
        """
        :type M: List[List[int]]
        :rtype: int
        """
        n = len(M)
        ans = 0
        hash = [False] * n

        def dfs(idx):
            hash[idx] = True
            for index, item in enumerate(M[idx]):
                if hash[index] == False and item == 1:
                    dfs(index)

        for i in range(n):
            if hash[i] == False:
                ans += 1
                dfs(i)

        return ans
