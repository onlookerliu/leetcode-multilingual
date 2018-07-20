class Solution:
    def canMeasureWater(self, x, y, z):
        """
        :type x: int
        :type y: int
        :type z: int
        :rtype: bool
        """
        return z == 0 or (x + y >= z and z % self.gcd(x, y) == 0)

    def gcd(self, x, y):
        if y == 0:
            return x
        return self.gcd(y, x % y)
