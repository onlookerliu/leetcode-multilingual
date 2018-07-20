class MergeSortedArray:
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        if n != 0:
            nums1[m:m + n] = nums2
            nums1[0:m + n] = sorted(nums1[0:m + n])
            # print(nums1)