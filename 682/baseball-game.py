class Solution:
    def calPoints(self, ops):
        """
        :type ops: List[str]
        :rtype: int
        """
        valid = []
        score = 0
        for op in ops:
            if op == "C":
                score -= valid.pop()
            elif op == "D":
                valid.append(valid[len(valid)-1] * 2)
                score += valid[-1]
            elif op == "+":
                valid.append(valid[-1] + valid[-2])
                score += valid[-1]
            else:
                valid.append(int(op))
                score += valid[-1]
        return score
