class PalindromeNumber(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if 0 <= x < 10:
            return True
        if x % 10 == 0:
            return False

        y = 0
        while x > y:
            y = y * 10 + x % 10
            x //= 10

        return x == y or x == y // 10
