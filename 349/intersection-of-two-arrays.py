class Solution():
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype List[int]
        """
        d = {}
        x = [i for i in nums1 if i in nums2]
        for i in x:
            d[i] = 0
        return d.keys()


class Solution():
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype List[int]
        """
        return list(set(nums1) & set(nums2))
