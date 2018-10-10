class Solution:
    def countPrimeSetBits(self, L, R):
        """
        :type L: int
        :type R: int
        :rtype: int
        """
        count = 0
        for i in range(L, R+1):
            weight = self.hamming(i)
            if self.is_prime(weight):
                count += 1
        return count

    def hamming(self, n):
        res = 0
        while n > 0:
            tmp = n % 2
            if tmp == 1:
                res += 1
            n = (n - tmp) >> 1
        return res
    
    # speed up
    # def hamming(self, n):
    #     res = 0
    #     while n != 0:
    #         res += 1
    #         n = n & (n - 1)
    #     return res

    def is_prime(self, n):
        if n < 2:
            return False
        if n == 2 or n == 3:
            return True
        for i in range(2, n):
            if n % i == 0:
                return False
        return True

    # speed up
    # def is_prime(self, n):
    #     prime_set = set([2, 3, 5, 7, 11, 13, 17, 19])
    #     if n in prime_set:
    #         return True
    #     return False
