from functools import reduce


class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        arr = []
        while n > 0:
            bit = n % 2
            arr.append(bit)
            n = (n - bit) / 2
        while len(arr) < 32:
            arr.append(0)
        return reduce(lambda acc, x: acc * 2 + x, arr)
