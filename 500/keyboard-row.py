class Solution:
    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        return list(filter(self.in_one_row, words))

    def in_one_row(self, word):
        """
        :type word: str
        :rtype: Boolean
        """
        keyboard = []
        keyboard.append(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
        keyboard.append(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
        keyboard.append(['z', 'x', 'c', 'v', 'b', 'n', 'm'])

        return self.in_row(keyboard, 0, word) or self.in_row(keyboard, 1, word) or self.in_row(keyboard, 2, word)

    def in_row(self, rows, index, word):
        row = rows[index]
        chars = word.lower()
        for _, char in enumerate(chars):
            if char not in row:
                return False
        
        return True
    