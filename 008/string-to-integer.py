class Solution:
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        str = str.strip()
        num = 0

        INT_MIN = - 1 << 31
        INT_MAX = (1 << 31) - 1 # pay attention to its operation order

        import re
        tmp = re.findall(r'^[-+]?\d+', str)
        
        if tmp:
            num = int(tmp[0])
            if num < INT_MIN:
                return INT_MIN
            if num > INT_MAX:
                return INT_MAX

        return num


print(Solution().myAtoi("   -42"))
print(Solution().myAtoi("words and 987"))
print(Solution().myAtoi("+1"))
print(Solution().myAtoi("2147483646"))
