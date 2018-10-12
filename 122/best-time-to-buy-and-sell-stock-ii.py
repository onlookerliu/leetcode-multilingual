class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        n = len(prices)
        if n == 0:
            return 0

        buy = [0] * n
        sell = [0] * n
        for i in range(n):
            if i == 0:
                buy[i] = -prices[i]
                sell[i] = 0
            else:
                buy[i] = max(buy[i-1], sell[i-1] - prices[i])
                sell[i] = max(sell[i-1], buy[i-1] + prices[i])
        
        return sell[n-1]