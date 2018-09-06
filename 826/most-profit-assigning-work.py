class Solution:
    def maxProfitAssignment(self, difficulty, profit, worker):
        """
        :type difficulty: List[int]
        :type profit: List[int]
        :type worker: List[int]
        :rtype: int
        """
        from collections import defaultdict
        diffPro = defaultdict(int)
        for diff, pro in zip(difficulty, profit):
            diffPro[diff] = max(diffPro[diff], pro)
        maxVal = 0
        for x in range(min(difficulty + worker), max(difficulty + worker) + 1):
            diffPro[x] = max(diffPro[x], maxVal)
            maxVal = max(diffPro[x], maxVal)
        return sum(diffPro[w] for w in worker)
