public class Solution {
    public int maxProfit(int[] prices) {
        int buy1 = Integer.MIN_VALUE, sell1 = 0;
        int buy2 = Integer.MIN_VALUE, sell2 = 0;
        for (int price : prices) {
            // buy1 = Math.max(buy1, -price);
            if (buy1 < -price) buy1 = -price;
            if (sell1 < buy1 + price) sell1 = buy1 + price;
            if (buy2 < sell1 - price) buy2 = sell1 - price;
            if (sell2 < buy2 + price) sell2 = buy2 + price;
        }
        return sell2;
    }
}