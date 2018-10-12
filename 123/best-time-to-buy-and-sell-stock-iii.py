class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        buy1, buy2 = float("-inf"), float("-inf")
        sell1, sell2 = 0, 0
        for price in prices:
            if buy1 < -price:
                buy1 = -price
            if sell1 < buy1 + price:
                sell1 = buy1 + price
            if buy2 < sell1 - price:
                buy2 = sell1 - price
            if sell2 < buy2 + price:
                sell2 = buy2 + price
        return sell2
