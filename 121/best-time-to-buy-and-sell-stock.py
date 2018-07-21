class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        size = len(prices)
        if size == 0:
            return 0

        res = []
        for i in range(size):
            start = i
            buy_in = prices[start]
            sell_out = max(prices[start+1:size]) if start + 1 < size else prices[size-1]
            profit = sell_out - buy_in
            profit = profit if profit > 0 else 0
            res.append(profit)
        
        return max(res)

print(Solution().maxProfit([7, 1, 5, 3, 6, 4]))
