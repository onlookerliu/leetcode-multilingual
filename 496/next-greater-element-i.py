class Solution:
    def nextGreaterElement(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        hash = {}
        len1 = len(nums1)
        len2 = len(nums2)
        for i, num in enumerate(nums2):
            hash[num] = i

        res = []
        for num in nums1:
            exist = False
            for j in range(hash[num], len2):
                if nums2[j] > num:
                    res.append(nums2[j])
                    exist = True
                    break

            if not exist:
                res.append(-1)

        return res
