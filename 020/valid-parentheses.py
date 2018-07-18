class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        target = {'(': ')', '[': ']', '{': '}'}

        for char in s:
            if len(stack) == 0:
                stack.append(char)
            elif char == target.get(stack[len(stack) - 1]):
                stack.pop()
            else:
                stack.append(char)

        return len(stack) == 0


print(Solution().isValid("([)]"))
