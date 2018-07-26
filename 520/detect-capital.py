class Solution:
    def detectCapitalUse(self, word):
        """
        :type word: str
        :rtype: bool
        """
        head, *tail = word
        if head == head.upper():
            return all(list(map(lambda char: char == char.upper(), tail))) or all(list(map(lambda char: char == char.lower(), tail)))

        return all(list(map(lambda char: char == char.lower(), tail)))
