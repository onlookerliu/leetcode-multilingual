class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        len1 = len(nums1)
        len2 = len(nums2)
        total = len1 + len2
        half = total >> 1
        if total & 1:
            return self.findKth(nums1, len1, nums2, len2, half+1)
        else:
            return (self.findKth(nums1, len1, nums2, len2, half) + self.findKth(nums1, len1, nums2, len2, half+1)) / 2
        
    def findKth(self, nums1, len1, nums2, len2, k):
        if len1 > len2:
            return self.findKth(nums2, len2, nums1, len1, k)
        if len1 == 0:
            return nums2[k-1]
        if k == 1:
            return min(nums1[0], nums2[0])

        pa = min(k >> 1, len1)
        pb = k - pa
        if nums1[pa - 1] < nums2[pb - 1]:
            return self.findKth(nums1[pa:], len1 - pa, nums2, len2, k - pa)
        elif nums1[pa - 1] > nums2[pb - 1]:
            return self.findKth(nums1, len1, nums2[pb:], len2 - pb, k - pb)
        else:
            return nums1[pa - 1]

