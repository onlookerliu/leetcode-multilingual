class Solution:
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        hash = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
                'C': 100, 'D': 500, 'M': 1000}
        length = len(s)
        sum = 0
        for i in range(length-1):
            curr_roman = s[i]
            next_roman = s[i+1]
            if hash[curr_roman] < hash[next_roman]:
                sum -= hash[curr_roman]
            else:
                sum += hash[curr_roman]

        return sum + hash[s[length-1]]
