class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        l, r = 0, len(height)-1
        h, area = 0, 0
        while l < r:
            h = min(height[l], height[r])
            area = max(area, h * (r - l))
            while height[l] <= h and l < r:
                l += 1
            while height[r] <= h and l < r:
                r -= 1

        return area
