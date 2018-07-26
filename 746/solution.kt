class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        var dp0 = 0
        var dp1 = 0
        var dp2 = 0

        val length:Int = cost.size + 1
        for (index in 2 until length) {
            dp2 = min(dp0 + cost[index-2], dp1 + cost[index-1])
            dp0 = dp1
            dp1 = dp2
        }
        return dp2
    }
}