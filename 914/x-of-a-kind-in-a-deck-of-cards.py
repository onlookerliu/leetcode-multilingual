class Solution:
    def hasGroupsSizeX(self, deck):
        """
        :type deck: List[int]
        :rtype: bool
        """
        counts = {}
        for card in deck:
            if counts.get(card) is None:
                counts[card] = 1
            else:
                counts[card] += 1
            
        for i in range(2, len(deck)+1):
            if len(deck) % i:
                continue
            ok = True
            for item in counts.items():
                if item[1] % i:
                    ok = False
                    break
            if ok:
                return True
        return False
