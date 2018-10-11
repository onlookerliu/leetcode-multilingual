class Solution:
    def rotateString(self, A, B):
        """
        :type A: str
        :type B: str
        :rtype: bool
        """
        if len(A) == 0 and len(B) == 0:
            return True

        def rotate(lst):
            lst.append(lst[0])
            return lst[1:]

        lst = list(A)
        for i in range(len(A)):
            lst = rotate(lst)
            if "".join(lst) == B:
                return True

        return False
