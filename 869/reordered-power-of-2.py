# import collections

# class Solution:
#     def reorderedPowerOf2(self, N):
#         count = collections.Counter(str(N))
#         return any(count == collections.Counter(str(1 << b)) for b in range(31))


class Solution:
    def __init__(self):
        self.aNum = set()
        for i in range(32):
            n = str(2 ** i)
            self.aNum.add(''.join(sorted(n)))

    def reorderedPowerOf2(self, N):
        m = ''.join(sorted(str(N)))
        return m in self.aNum


if __name__ == '__main__':
    sol = Solution()
    print(sol.reorderedPowerOf2(46))
